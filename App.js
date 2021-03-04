// Bottom Navigation with Navigation Icon from Local Directory
// https://aboutreact.com/react-native-bottom-navigation-icon-from-local/

import 'react-native-gesture-handler';

import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import state from './pages/State';
import Search from './pages/Search';
import AddCard from './pages/AddCard';
import Info from './pages/Info';
import Bouquets from './pages/Bouquets';
import Menu from './pages/Menu';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#4DBBEB'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home Page'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details Page'}}
      />
    </Stack.Navigator>
  );
}

function stateStack() {
  return (
    <Stack.Navigator
      initialRouteName="state"
      screenOptions={{
        headerStyle: {backgroundColor: '#4DBBEB'},
        headerTintColor: '#fff',
  headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="state"
        component={state}
        options={{title: 'الولايات'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
    
  );
}
function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {backgroundColor: '#4DBBEB'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{title: 'Search'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
    
  );
}
function AddCardStack() {
  return (
    <Stack.Navigator
      initialRouteName="AddCard"
      screenOptions={{
        headerStyle: {backgroundColor: '#4DBBEB'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{title: 'AddCard'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
    
  );
}
function InfoStack() {
  return (
    <Stack.Navigator
      initialRouteName="Info"
      screenOptions={{
        headerStyle: {backgroundColor: '#4DBBEB'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Info"
        component={Info}
        options={{title: 'Info'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
    
  );
}
function BouquetsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Bouquets"
      screenOptions={{
        headerStyle: {backgroundColor: '#4DBBEB'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Bouquets"
        component={Bouquets}
        options={{title: 'Bouquets'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
    
  );
}
function MenuStack() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: {backgroundColor: '#4DBBEB'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{title: 'Menu'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
    
  );
}


function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
  
        initialRouteName="TabHome"
        tabBarOptions ={{
          inactiveTintColor:"#C9C9C9",
          activeTintColor :"#0C9EBF",
          
          labelStyle: { fontSize: 11 , fontWeight:'700',   },
          indicatorStyle :{
              backgroundColor : '#0C9EBF',
              top:0,
              alignSelf:'center',
              
          },
          pressOpacity:.7,
          style:{
          
              shadowColor: '#ccc',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 1.0,
              shadowRadius: 5, 
              
                                     
          },
         }}
         lazy={true}
         tabBarPosition={'bottom'}
         swipeEnabled={false}
                                       >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'الرئيسية',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('./asset/home-2.png')
                    : require('./asset/home.png')
                }
                style={{
                  width: 23,
                  height: 23,
                  borderRadius: 1,
                  resizeMode:'contain',
                  

                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="stateStack"
          component={stateStack}
          options={{
            tabBarLabel: 'الولايات',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('./asset/usa-2.png')
                    : require('./asset/usa.png')
                }
                style={{
                  width: size,
                  height: size,
                  resizeMode:'contain',
              
                  
                ///#4DBBEB

                }}
              />
            ),
          }}
        />
           <Tab.Screen
          name="SearchStack"
          component={SearchStack}
          options={{
            tabBarLabel: 'البحث',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('./asset/loupe-2.png')
                    : require('./asset/loupe.png')
                }
                style={{
                  width: size,
                  height: size,
                  resizeMode:'contain',
                  marginTop:5

                }}
              />
            ),
          }}
        />
          <Tab.Screen
          name="AddCardStack"
          component={AddCardStack}
          options={{
            tabBarLabel: 'أنشاء بطاقة',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('./asset/plus.png')
                    : require('./asset/plus-2.png')
                }
                style={{
                  width: size,
                  height: size,
                  resizeMode:'contain',
                  marginTop:5

                }}
              />
            ),
          }}
        />
                <Tab.Screen
          name="InfoStack"
          component={InfoStack}
          options={{
            tabBarLabel: 'من نحن',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('./asset/info-2.png')
                    : require('./asset/info.png')
                }
                style={{
                  width: size,
                  height: size,
                  resizeMode:'contain',
                  marginTop:5

                }}
              />
            ),
          }}
        />
                 <Tab.Screen
          name="BouquetsStack"
          component={BouquetsStack}
          options={{
            tabBarLabel: 'الباقات',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('./asset/briefcase-2.png')
                    : require('./asset/portfolio.png')
                }
                style={{
                  width: size,
                  height: size,
                  resizeMode:'contain',
                  marginTop:5
                }}
              />
            ),
          }}
        />
                   <Tab.Screen
          name="MenuStack"
          component={MenuStack}
          options={{
            tabBarLabel: 'القائمة',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('./asset/user-2.png')
                    : require('./asset/user.png')
                }
                style={{
                  width: size,
                  height: size,
                  resizeMode:'contain',
                  marginTop:5
                }}
              />
            ),
          }}
        />
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
