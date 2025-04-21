import React, { useState } from "react";
import { Navbar, Planner, Requirements, Class } from './components';
import "./App.css";


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">hello!</h1>
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <Planner />
          </div>
          <div className="w-64">
            <Requirements />
          </div>
        </div>
      </main>
    </div>
  );
}