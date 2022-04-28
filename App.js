import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import AddingList from './Components/adding-List/List';
import FormFieldComponent from './Components/adding-InputFields/adding-form-fields';
import AddingImageComponent from './Components/adding-Image/adding-image';


export default function App() {


  var [theme, setTheme ] = useState('light')
  var [fruitSelection, setFruitSelection ] = useState('')
  const [image, setImage ] = useState(1)
  const [name, setName ] = useState('')
  const [age, setAge ] = useState()
  const [title, setTitle ] = useState('Hello Valentine, Welcome to the world of React Native!')
  function onButtonclick(){
     setTitle('text just changed from what it was to this, because you clicked the button')
  }


  function changeTheme(){
    setTheme(theme = "light" ? "dark" : "light")
  }

  const pic = {
      '1': require('.././firstReactNativeProject/assets/turtule_neck_shirt.png'),
      '2': require('.././firstReactNativeProject/assets/norah.png')
  }

  function changeImage(){

    if(image === 1){
      setImage(2)
    }
    if(image === 2){
      setImage(1)
    }
  }

  useEffect(()=>{
    title
  },[title])
  return (
    <ScrollView>
    <View style = {styles.container}>

      {/* Section for adding Image */}
      <View>
        <AddingImageComponent />
      </View>

      {/* Section for Form Fields */}
      <View>
        <FormFieldComponent />
      </View>

      {/* Section for Adding list, clickable 
          function on list and Alert component 
      */}
      <View>
        <AddingList />
      </View>
  
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  app: {
    backgroundColor: "#fff",
    height: "100vh"
  },

  best: {
    borderColor: 'red',
    borderRadius: 500,
    fontSize: 50,
    marginTop: 50,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    margin: 50,
    fontSize: 30,
    textTransform: 'uppercase',
    color: 'red',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 200,
  },

  formBtn: {
    width: 200,
    borderRadius: 100,
    marginTop: 10,
  },
  items: {
    margin:10,
    padding: 20,
    backgroundColor: 'black',
    color: 'white',

  }
});
