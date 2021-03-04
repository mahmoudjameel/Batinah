import React, {useState} from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TabView, SceneMap,  TabBar} from 'react-native-tab-view';
import RNPickerSelect from 'react-native-picker-select';

const FirstRoute = () => (

  <View style={[styles.scene, { backgroundColor: '#29c1e2' }]} >
   <View style={{backgroundColor:'white', height:'30%', width:'90%', alignSelf:'center',marginTop:50, borderRadius:10, }}>
     <View>
       <Text style={{textAlign:'right', margin:10, marginRight:15}}>Location</Text>
       <TextInput style={{alignSelf:'flex-end', margin:10, marginRight:15, width:'90%',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
}} 

/>
     </View>
     <View style={{alignSelf:'flex-end', paddingRight:20}}>
       <Text style={{textAlign:'right', margin:10}}>الولاية</Text>

       <RNPickerSelect
       styles={{}}
       TextStyle={{textAlign:'right'}}
             useNativeAndroidPickerStyle={false}
             style={{backgroundColor:'red'}}

            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'ولاية الخابورة', value: 'ولاية' },
                { label: 'ولاية الرستاق', value: 'ولاية الرستاق' },
                { label: 'ولاية السويق', value: 'ولاية السويق' },
                { label: 'ولاية العوابي', value: 'ولاية العوابي' },
                { label: 'ولاية بركاء', value: 'ولاية بركاء' },
            ]}
        />

     </View>

   </View>
  </View>
  


);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const SecondRoute2 = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const SecondRoute3 = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const SecondRoute4 = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const SecondRoute5 = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const SecondRoute6 = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function HomeScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'الاعمال المنزلية الخاصة بالنساء' },
    { key: 'second', title: 'الاعمال المنزلية الرجاليه' },
    { key: 'second2', title: 'مطابع القرطاسية وتصميم الأختام' },
    { key: 'second3', title: 'شركات متخصصة في العزل الحراري' },
    { key: 'second4', title: 'ملاعب الترتان' },
    { key: 'second5', title: 'تكاسي تحت الطلب' },
    { key: 'second6', title: 'تأجير الخيام والكوشات والزينة' },
  ]);

  const renderScene = SceneMap({
    
    first: FirstRoute,
    second: SecondRoute,
    second2: SecondRoute2,
    second3: SecondRoute3,
    second4: SecondRoute4,
    second5: SecondRoute5,
    second6: SecondRoute6,
  });

  const renderTabBar = props => (
    <View style={{}}>
    
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}


    style={{scaleX:1,}}

    >
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'red' }}
        style={{  }}
        tabStyle={{width: 'auto', height:90 }}
        labelStyle={{width:100,fontWeight:'bold', textAlign:'center', fontSize:13, }}
        />

    </ScrollView>
    </View>

  );
  
  return (
  

<TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
      style={{flex:1,
    }}
    
    />


  
  


  );
}

const styles = StyleSheet.create({
  scene: {
    flex:1,
    
  },
});
