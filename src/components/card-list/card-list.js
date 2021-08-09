import React from "react";
import "./card-list.css";
import {Card} from "../card/card";

export const CardList = (props) =>{
  return   <div className="card-list">{
    props.monstores.map(monster => <Card monster={monster} key={monster.id}></Card>)
  }</div>;
}