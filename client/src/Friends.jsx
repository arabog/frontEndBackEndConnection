import axios from 'axios'
import React, { Component } from 'react'


export default class friends extends Component {

          constructor() {
                    super()

                    this.state = {
                              friends: []
                    }
          }


          handleBtnClick = () => {
                    axios.get("/newEndpt")
                              .then((res) => {

                                        this.setState(
                                                  {
                                                            friends: res.data.forEach(item => {
                                                                      this.state.friends.push(item._id)

                                                            })
                                                  }
                                                  )
                                                  
                                        })
                                        
                              .catch(err => {
                                        console.log(err)
                              })
                              
                              console.log(this.state.friends)
          }


          render() {
                    return (
                              <div>
                                        <h1>My friends info: {this.state.friends} </h1>

                                        <button onClick = {this.handleBtnClick}> Friends</button>
                              </div>
                    )
          }
}
