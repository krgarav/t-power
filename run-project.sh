#!/bin/bash

echo "Starting Frontend..."
cd Frontend/
npm start &

echo "Starting Backend..."
cd Backend/
npm start &

