import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Nonogram() {
  const altura = 10;
  const largura = 10;
  const [tabela, setTabela] = useState();

  useEffect(() => {
    if(tabela == undefined){
      setTabela(MakeBlocks(altura, largura));

    }
  }, [])

  if(tabela == undefined){
    return <View><Text>Loading</Text></View>
  }

  return (
    <View style={styles.gameContainer}>
      {
        tabela.map(row => {
          return (
            row.map(block => {
              return (
                <View style={[styles.block, { backgroundColor: block.check ? 'black' : 'white'  }]} onTouchStart={() => blockClick(block)}>
                  <Text>{block.check ? 'c' : 'n'}</Text>
                </View>
              )
            })
          )
        })
      }
    </View>
  )

  function blockClick(block){
    alert(JSON.stringify(block))
    updateBlocks(block)
  }

  function updateBlocks(){
    let blocks = [];

    tabela.map(rows => {
      let row = []
      rows.map(block => {
        block.check = !block.check;
        row.push(block)
      })

      blocks.push(row)
    })

    console.log('a')
    setTabela(blocks)
  }
}

function MakeBlocks(altura, largura) {
  console.log('make a')
  let matrix = [];
  for (let i = 0; i < altura; i++) {
    let row = [];
    for (let c = 0; c < largura; c++) {
      row.push({ c: c, i: i, check: false });
    }
    matrix.push(row);
  }

  console.log(matrix)
  return matrix;
}


const styles = StyleSheet.create({
  block: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderWidth: .5,
    padding: 10,
    margin: 0
  },
  gameContainer: {
    width: 304,
    height: 304,
    flexDirection: "row",
    display: 'flex',
    alignContent: 'center',
    flexWrap: 'wrap',
    borderWidth: 2
  }
});

