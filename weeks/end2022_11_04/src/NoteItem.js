import React from "react";
import { FaStar } from "react-icons/fa";
import {createArray} from "./lib";
import Star from "./Star";

export default function NoteItem({ selected = false, onSelect = f => f }) {
  return (
      <div style={{ padding: 5 }}>
        <input type='text' placeholder='напишите текст заметки'/>
      </div>
  );
}
