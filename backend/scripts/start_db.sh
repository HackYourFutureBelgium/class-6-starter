#!/bin/bash
docker run --rm -v mongo:/data/db -p 27017:27017 --name mongodb mongo