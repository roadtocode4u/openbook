import { createClient } from 'redis';

import dotennv from 'dotenv';

dotennv.config();

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

client.on('error', err => console.log('Redis Client Error', err));
await client.connect();

export const createCache = async(key, value)=>{
    await client.set(key, JSON.stringify(value));
    return true
}

export const getCache = async(key)=>{
    const value = await client.get(key);
    return JSON.parse(value)
}

export const flushCache = async()=>{
    await client.sendCommand(['FLUSHALL']);
}
