import React from "react";
import { Text, View, Image, TextInput, Button, StyleSheet } from "react-native";
import { Link } from 'expo-router';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Image: {
        margin: 30,
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    navbar: {
        backgroundColor: '#5DD08F',
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 40
    },
    desc: {
        margin: 20,
        textAlign: 'justify',
    },
    botao: {
        marginTop:50,
        textAlign:'center',
        borderRadius:10,
        padding:20,
        width:100,
        backgroundColor: '#5DD08F'
    },
    box2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'

    }


})

export default Sobre = function () {
    return (
        <View>
            <View style={style.navbar}>
                <Text style={style.title}>Sobre mim</Text>
            </View>
            <View style={style.box}>
                <Image
                    style={style.Image}
                    source={require('../../../assets/images/eu.jpg')}
                />
                <Text style={style.desc}>
                Olá, meu nome é Pedro, tenho 17 anos e sou casado. Uma das minhas maiores paixões é jogar bola, 
                algo que me acompanha desde sempre. Além disso, estou sempre em busca de novas experiências 
                e oportunidades para crescer pessoal e profissionalmente
                </Text>
            </View>
            <View style={style.box2}>
                <Link href="/pag/page2/Viagens" style={style.botao}>
                    <Text>Viagens</Text>
                </Link>
                <Link href="/pag/page3/Filme" style={style.botao}>
                    <Text >Filme</Text>
                </Link>
            </View>
        </View>
    );
};