import React from 'react';
import { Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
        ? options.title
        : scene.route.name;

  return (
      <Appbar.Header style={{ backgroundColor: "#6DC7EB" }}>
        {options.headerTitle === "Login" ? null : previous ? (
          <Appbar.BackAction
            onPress={navigation.goBack}
            color={"#11305D"}
          />
        ) : (
            <TouchableOpacity style={{padding:15}}
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
            >
              <SimpleLineIcons name="options-vertical" size={24} color="#11305D"/>
            </TouchableOpacity>
          )}
        <Appbar.Content
          title={
            previous ? title : <MaterialCommunityIcons name="alpha-h-box" size={40} color={"#11305D"} />
          }
        />      
      </Appbar.Header>
  );
};

export default Header;