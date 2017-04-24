import express from 'express'
import twitterAPI from 'twitter'
import config from '../../config.js'

const router = express.Router()
const twitter = new twitterAPI(config)
