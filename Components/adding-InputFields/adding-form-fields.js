import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { styles } from "./form-input-style";

const FormFieldComponent = () => {

    const [name, setName ] = useState('')
    const [age, setAge ] = useState('')
    const [state, setState ] =useState('')

    function onSubmit(e){
        e.preventDefault()
        let formData = {
            name,
            age,
            state
        }
        Alert.alert("My Bio-Data", name)

        setAge('')
        setName('')
        setState('')

    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.header}>My Bio-Data Form </Text>
            <View style={styles.input_view_wrapper}>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} value={name}
                onChangeText={(name)=> setName(name)} placeholder="Enter your Name" />
                <Text style={styles.label}>Age</Text>
                <TextInput style={styles.input} value={age}
                onChangeText={(age)=> setAge(age)} placeholder="Enter your Age" />
                <Text style={styles.label}>State of Origin</Text>
                <TextInput style={styles.input} value={state}
                onChangeText={(state)=> setState(state)} placeholder="Enter your State" /> 
                <View style={styles.btn_box}>
                    <Text style={styles.btn} onPress={(e)=> onSubmit(e)}>Submit</Text>
                </View>
            </View>
        </View>
     );
}
 
export default FormFieldComponent;