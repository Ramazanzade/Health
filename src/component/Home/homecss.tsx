import { StyleSheet } from 'react-native'
const colors = { primary: '#282534', white: '#ffff' }
export default StyleSheet.create({
    view1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5%'
    },
    icon: {
        marginTop: '30%',
        color: '#101623'
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: '#101623',
        width: '50%'
    },
    inputview: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        marginTop: '3%'
    },
    icon2: {
        position: 'absolute',
        zIndex: 2,
        margin: 20,
        paddingLeft: 55,
        color: '#b7b8bc'
    },
    input: {
        backgroundColor: '#F2F2F2',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#b7b8bc',
        height: 60,
        width: '90%',
        marginHorizontal: '5%',
        paddingLeft: 50,
        fontSize: 15
    },
    toucview: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '10%'
    },
    touc: {
        width: 80,
        height: 80,
        backgroundColor: '#D9D9D9',
        borderRadius: 15
    },
    text1: {
        fontSize: 15,
        textAlign:'center',
        marginTop:'5%'
    },
    icon3: {
        color: '#199A8E',
        alignSelf: 'center',
        marginTop: '25%'
    }

})