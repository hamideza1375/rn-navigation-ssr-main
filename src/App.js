import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import { ErrorBoundary } from "react-error-boundary";

import { states, contextStates } from "./context/_context";
import { Column, Img } from "./other/Components/Html";
import Home from './views/client/Home'
import Login from "./views/user/Login";
import ToastProvider, { Toast } from "./other/utils/toast";



let App = ({ location: { pathname } }) => {
  const { height } = useWindowDimensions();
  const s = states()
  const toast = new Toast(s.init)
  const p = { ...s.init, toast }

  return (
    <contextStates.Provider value={{ ...s.init, toast }}>
      {s.init.splash ?
        <Column pos='absolute' t={0} l={0} r={0} b={0} z={111111} h={'100%'} w={'100%'} bgcolor='#fff' >
          <Img src={s.init.logoUrl} f={1} style={{ resizeMode: 'stretch' }} />
        </Column>
        :
        <></>
      }
      <ErrorBoundary>
        <NavigationContainer >
          <Column style={{ width: '100%', height }} >
            <ToastProvider {...s.init} />
            {pathname === '/home' && <Home {...p} />}
            {pathname === '/' && <Home {...p} />}
            {pathname === '/login' && <Login {...p} />}
          </Column>
        </NavigationContainer>
      </ErrorBoundary>
    </contextStates.Provider>
  )
}

export default App;