import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MainButton from "../../elements/button/NextStepButton";
import Divider from "../../elements/layout/Divider";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { Header } from "../../elements/layout/Header";
import { AvatarQBtn } from "./avatarComponents";

export default function CreateQ2() {
    const navigation = useNavigation();
    const onpressNextstep = () => {
        navigation.navigate('CreateQ3');
    }
    const [q2_1, setQ2_1] = useState(false);
    const [q2_2, setQ2_2] = useState(false);

    return(
        <Page>
            <Header left={'Beginning of the journey'} right={'2'} />
            <View style={styles.contents}>
                <View style={styles.textWrap}>
                    <Text>Your perfect night look like</Text>
                </View>
                <View style={styles.btnWrap}>
                    <View style={styles.btn}>
                        <AvatarQBtn text={'Party with friends'} isSelected={q2_1}/>
                    </View>
                    <View style={styles.btn}>
                        <AvatarQBtn text={'Movie night and popcorn'} isSelected={q2_2}/>
                    </View>
                </View>
            </View>
            <MainButton title="next step" onPress={onpressNextstep}></MainButton>

        </Page>
    );
}

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    justifyContent: 'center',
  },
  textWrap: {
    alignItems: 'center',
    paddingBottom: 37,
  },
  btnWrap: {
    justifyContent: "space-evenly",
    flexDirection: 'row',
  },
  btn: {
    alignItems: 'center',
  }
});