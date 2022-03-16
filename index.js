const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const lowdb = require('lowdb')

const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')

const db = low(adapter)

db.defaults({ books: [] }).write()
