import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    Button,
    
}from 'react-native'

class Home extends React.Component{
    state = {
        data: [],
        input: '',
      };
      
      addData = () => {
        const data = this.state.input;
        this.state.data.push(data);
        this.setState({data: this.state.data,input:''});
      };
    
      deleteData=(element)=>{
          const item= element
          // console.log(item)
    
          const dataFilter=this.state.data.filter((value,key)=>{
              return item != key
          })
          // console.log(dataFilter)
          this.setState({data: dataFilter})
      };
      render() {
        return (
          <View style={styles.container}>

            <View style={styles.header}>
              <Text style={styles.textHeader}> To Do App</Text>
            </View>

            <ScrollView style={styles.scroll}>
              {this.state.data.map((value, key) => {
                return (
                  <View style={styles.boxApp} key={key}>
                    <View style={styles.content}>
                      <Text>{value}</Text>
                    </View>
                    <View style={styles.delete}>
                      <Text onPress={()=>this.deleteData(key)}>Hapus</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            <View>
              <TextInput
                placeholder="Masukan Data"
                backgroundColor= 'white'
                value={this.state.input}
                onChangeText={(text) => this.setState({input: text})}
              />
              <Button 
              backgroundColor= '#00121a' 
              title="Input"
               onPress={() => this.addData()} />
            </View>
          </View>
        );
      }
    }
export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2894d2',
    },
    header: {
      height: 50,
      width: '100%',
      backgroundColor: '#00121a',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1,
    },
    textHeader: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#2894d2'
    },
    scroll: {
      flex: 1,
      // backgroundColor: 'red',
    },
    boxApp: {
      width: '100%',
      backgroundColor: '#0000009c',
      flexDirection: 'row',
      elevation: 1,
      marginBottom: 5,
    },
    content: {
      height: 50,
      width: '80%',
      // backgroundColor: 'red',
      padding: 5,
    },
    delete: {
      height: 50,
      width: '20%',
      // backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input2:{
        backgroundColor: '#00121a'
    }
    
  });