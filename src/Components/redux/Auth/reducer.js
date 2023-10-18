import React from 'react'
import { LOGIN_FAILED,SIGNUP_SUCCESS, LOGIN_PENDING, LOGIN_SUCCESS } from './actionTypes'

const initState={
    loading:false,
    auth:false,
    err:false,
    token:''
}

export const reducer = (state=initState,{type,payload}) => {
  switch(type){
    case LOGIN_PENDING:return {...state, loading:true,err:false}
    case SIGNUP_SUCCESS:return {...state,loading:false,err:false}
    case LOGIN_SUCCESS:return {...state,loading:false,err:false,token:payload}
    case LOGIN_FAILED:return {...state,loading:false,err:true}
    default:return state
  }
}

