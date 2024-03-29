import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Page from "../Page";
import {useNavigation} from '@react-navigation/native';
import { Header } from "../../elements/layout/Header";
import { AvatarQBtn } from "./avatarComponents";
import { useRecoilState } from 'recoil';
import { personalData } from "../../../state/personalData";

import { useAvatarContext } from "../../../hooks/context/AvatarContext";

export default function CreateQ3() {
    const navigation = useNavigation();
    const onpressGoback = () => {
        navigation.navigate('CreateQ2');
    }
    const [q3_1, setQ3_1] = useState(false);
    const [q3_2, setQ3_2] = useState(false);
    const [createAvatar, setCreateAvatar] = useRecoilState(personalData);
    
    const {setHat } = useAvatarContext();

    // ..... !------------
    const handleOnpress = (selected, opposite) => {
      if (selected=='q3_1'){
        setHat("beanie-yellow"); // 헤드폰 주석 수정
      } else{
        setHat("beanie-blue");
      }
        if (createAvatar.includes(selected)) {
          const newAvatar = createAvatar.filter((i) => i !==selected);
          setCreateAvatar(newAvatar);
        } else{
          setCreateAvatar((prev) => [...prev, selected])
        }
        if (createAvatar.includes(opposite)) {
          const newAvatar = createAvatar.filter((i) => i !==opposite);
          setCreateAvatar(newAvatar);
        }
        setTimeout(() => {
          navigation.navigate('CreateYouravatar');
        }, 200)
      }
    return(
        <Page>
            <Header left={'Beginning of the journey'} right={'3'} />
            <View style={styles.contents}>
                <View style={styles.textWrap}>
                    <Text>You enjoy working</Text>
                </View>
                <View style={styles.btnWrap}>
                    <View style={styles.btn}>
                        <AvatarQBtn text={'Alone'} isSelected={q3_1} iconSrc={'q3_1'} handleOnpress={() => handleOnpress('q3_1', 'q3_2')}/>
                    </View>
                    <View style={styles.btn}>
                        <AvatarQBtn text={'In a team'} isSelected={q3_2} iconSrc={'q3_2'} handleOnpress={() => handleOnpress('q3_2', 'q3_1')}/>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={onpressGoback} style={{alignItems:'center'}}>
              <Text style={{color:'#8B8A8A', textDecorationLine: 'underline'}}>
                Go back
              </Text>
            </TouchableOpacity>
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
