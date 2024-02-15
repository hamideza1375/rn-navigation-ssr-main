import { useEffect, useRef, useState } from 'react'
import { Column, H1, I, Icon, Img, Input, M_icon, P, Pfa, Row, ScrollHorizontal } from '../../other/Components/Html'
import { Animated, Easing } from 'react-native'
import s from './client.module.scss'

const Home = () => {


  const [item, setitem] = useState('پیراشکی')
  const animatedTop = useRef(new Animated.Value(0)).current;



  const end = () => Animated.timing(animatedTop, {
    toValue: 0, duration: 500,
    easing: Easing.bounce,
    useNativeDriver: false
  }).start();

  const hidden = animatedTop.interpolate({
    inputRange: [-25, 0],
    outputRange: [0, 1]
  })


  useEffect(() => {

    let arr = ["پیتزا", "ساندویچ", "برگر", "پیراشکی", "کنتاکی"];
    let arrIter = arr[Symbol.iterator]();

    setInterval(() => {
      animatedTop.setValue(-25)
      // start()
      end()
      const it = arrIter.next()
      setitem(it.value);
      if (it.done == true) {
        setitem(arr[0])
        arrIter = arr[Symbol.iterator]();
        arrIter.next()
      }
    }, 2000)
  }, [])


  return (
    <Column f={1} bgcolor='#fff'  >

      <Row style={{ overflow: 'hidden' }} br={3} w={'95%'} h={630} as='center' jc='space-between' mt={20} bgcolor='#f8f8f8' >

        <Row pos='absolute' l={50} t={30} >

          <Row mt={4} ml={20} p={9} br={5} col1={{ display: 'none' }} col2={{ display: 'none' }} col3={{ display: 'none' }} >
            <Icon name='truck' size={18} color='#555' />
            <P mr={8} fs={13} color='#777' >ثبت نام فروشندگان</P>
          </Row>

          <Column bgcolor='#f2c' p={9} br={5} col1={{ display: 'none' }} col2={{ display: 'none' }} col3={{ display: 'none' }} >
            <P fs={15} color='white' >ورود / ثبت نام</P>
          </Column>

        </Row>

        <Column pos='absolute' l={15} t={25} p={9} br={5} col4={{ display: 'none' }} col5={{ display: 'none' }} col6={{ display: 'none' }} >
          <Icon name='user' size={18} />
        </Column>

        <Column fg={1} ai='flex-start' pr={30} minw='45%' >

          <Column ai='flex-end' mb={20} mt={20} >
            <Row>
              <I color='#e29' fs={33} >! </I>
              <H1 color='#e29' fs={33}  >Snapp</H1>
            </Row>
            <H1 color='#e29' fs={33}  >Food</H1>
          </Column>

          <Row mt={50} mb={8} >
            <P fs={25} fw='bold' >سفارش آنلاین </P>
            <Animated.View style={{ top: animatedTop, opacity: hidden }} >
              <Pfa color='#e29' fs={30} fw='bold' mt={-10} >{item}</Pfa>
            </Animated.View>
          </Row>

          <P color='#777' fs={14.5} mb={22} >سفارش آنلاین غذا، میوه، نان، شیرینی و ...</P>


          <Column w={240} >
            <Column z={1} w={43} h={43} br={50} jc='center' ai='center' pos='absolute' r={4} t={3} >
              <M_icon name='add-location-alt' color='#777' size={17} />
            </Column>
            <Input pr={30} placeholder='.ابتدا آدرستان را انتخاب کنید' border={[1, 'silver']} br={150} />
            <Column w={43} h={43} bgcolor='#e29' br={50} jc='center' ai='center' pos='absolute' l={4} t={4} >
              <Icon name='search' color='white' size={17} />
            </Column>
          </Column>

        </Column>



        <Column h='100%' jc='flex-end' >
          <Img style={{ resizeMode: 'stretch' }} src={require('../../other/assets/images/hero-image.png')}
            w={500} h={550} ai='flex-end' />
        </Column>
      </Row>

      <ScrollHorizontal class={s.blur_effect} ccStyle={{ borderRadius: 20, minWith: '100%', width: '100%' }} jc='center' ai='center' as='center' fw='wrap' w={'92%'} h={130} br={20} pos='absolute' b={70}  >
        <Column f={1} minw={90} >
          <Img src={require('../../other/assets/images/10.png')} w={33} h={33} mh={30} />
        </Column>
        <Column f={1} minw={90} >
          <Img src={require('../../other/assets/images/9.png')} w={33} h={33} mh={30} />
        </Column>
        <Column f={1} minw={90} >
          <Img src={require('../../other/assets/images/8.png')} w={33} h={33} mh={30} />
        </Column>
        <Column f={1} minw={90} >
          <Img src={require('../../other/assets/images/7.png')} w={33} h={33} mh={30} />
        </Column>
        <Column f={1} minw={90} >
          <Img src={require('../../other/assets/images/6.png')} w={33} h={33} mh={30} />
        </Column>
        <Column f={1} minw={90} >
          <Img src={require('../../other/assets/images/5.png')} w={33} h={33} mh={30} />
        </Column>
        <Column f={1} minw={90} >
          <Img src={require('../../other/assets/images/4.png')} w={33} h={33} mh={30} />
        </Column>
        <Column f={1} minw={90} >
          <Img src={require('../../other/assets/images/3.png')} w={33} h={33} mh={30} />
        </Column>
        <Column f={1} minw={90} >
          <Img src={require('../../other/assets/images/2.png')} w={33} h={33} mh={30} />
        </Column>
        <Column f={1} minw={90} >
          <Img src={require('../../other/assets/images/1.png')} w={33} h={33} mh={30} />
        </Column>
      </ScrollHorizontal>

    </Column>
  )
}

export default Home