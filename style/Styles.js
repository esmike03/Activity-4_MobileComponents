import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 350, 
        backgroundColor: '#272821',
        borderColor: 'lightblue',
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowOffset: {width: -2, height: 2},  
        shadowColor: 'lightblue',  
        shadowOpacity: 0.1,  
        elevation: 5,
        shadowRadius: 3,  
      },
      txtcolor: {
        color: 'lightblue',
        fontWeight: 'bold',
        fontSize: 20,
      }
});