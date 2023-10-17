import React from 'react'

const initState={
    loading:false,
    auth:false,
    err:false,
    token:''
}

export const reducer = (state=initState,{type,payload}) => {
  switch(type){
    default:return state
  }
}

