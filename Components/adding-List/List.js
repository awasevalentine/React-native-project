import { Alert, FlatList } from "react-native";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./list-style";
// import AlertComponent from "../adding-Alert/alert";

const AddingList = () => {
    const [friuts, setFruits ] = useState([
        {name: 'Mango', id: 1},
        {name: 'Bannana', id: 2},
        {name: 'Orange', id: 3},
        {name: 'Apple', id: 4},
        {name: 'Plantain', id: 5},
        {name: 'Pineapple', id: 6},
        {name: 'Guava', id: 7},
        {name: 'Cashew nut', id: 8},
        {name: 'Pear', id: 9},
        {name: 'Avocados', id: 10},
    ])

    // Section for Alert and click event on the list

    const onItemClick = (name)=>{
        switch(name){
            case 'Mango':
                Alert.alert(`${name}`, `Are you sure you want this fruit ?`, alertSelectionOption(name))
                break
            case 'Banana':
                Alert.alert(`${name}`, `Are you sure you want this friut?`, alertSelectionOption(name))
                break
            default:
                Alert.alert(`${name}`, `Are you sure you want this friut ?`, alertSelectionOption(name))
        }
    }

    const alertSelectionOption = (data) =>{
        return [
            {
                text: 'Yes', onPress: ()=>{
                    onAgree(data)
                }
            },
            {
                text: 'No', onPress: ()=>{
                    onDisagree()
                }
            }
        ]
    }

    function onAgree(data){
        Alert.alert(`${data}`, `Is rich in mineral and vitamins.`)
    }

    function onDisagree(){
        Alert.alert(`Rejected`, `Please select another fruit from the list of options on the list`)
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.headers} >Section for List Rendering and Clickable functionality</Text>
            <FlatList 
            data={friuts}
            renderItem={({item})=>(
                <View >
                    <TouchableOpacity onPress={()=> onItemClick(item.name)}>
                        
                        <Text style={styles.items}>{item.name} </Text>
                    </TouchableOpacity>
                </View>
            )}
            />
        </View>

     );
}
 
export default AddingList;