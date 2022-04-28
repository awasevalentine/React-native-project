import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 30,
    },
    header:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: '#139487',
        letterSpacing: 3,
        marginBottom: 20
    },
    
    input_view_wrapper: {
        marginLeft: '10%',
        marginRight: '10%'
    },
    input:{
        width: '100%',
        borderColor: 'black',
        borderWidth: 1.2,
        padding: 10,
        marginTop: 5,
        borderRadius: 10
    },
    label: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    btn_box: {
        marginTop: 20,
        marginBottom: 30,
    },
    btn: {
        fontSize: 25,
        paddingTop: 9,
        borderRadius: 50,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#FFBED8',
        color: 'white', 
        textAlign: 'center'

    }
})