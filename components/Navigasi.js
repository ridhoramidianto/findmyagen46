import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { Appbar, Button, IconButton, Colors, FAB } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

class Navigasi extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#eeeeee'

            }}>
                <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: '#eeeeee', width: 70, height: 70, borderRadius: 35, bottom: 15, zIndex: 10 }}>
                    <TouchableOpacity>
                   <FAB
                    style={styles.fab}
                    small
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                  />
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'absolute', backgroundColor: '#2196F3', bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                    <Icon
                        name='menu'
                        type='material'
                        color='#f46434'
                        onPress={() => {}}

                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Icon
                            name='favorite'
                            type='material'
                            color='#f46434'
                            onPress={() => {}}
                            containerStyle={{ marginHorizontal: 16 }}
                        />
                        <Icon
                            name='search'
                            type='material'
                            color='#f46434'
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default Navigasi;