import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
        height: 950,
    },
    
    textDetalhes: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
        lineHeight: 22,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15,
    },

    tituloSinopse: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 5,
    },

    notaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },

    nota: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },

    imagem: {
        width: '100%', 
        height: 380,
        alignSelf: 'center',
        borderRadius: 20,
        resizeMode: 'cover',
    }
});

export default styles;