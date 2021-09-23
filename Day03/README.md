sudo service redis-server start
sudo service redis-server stop
sudo service redis-server restart


// Redis Notes
redis is not a database.
It runs on ram rather than hard disk. This is why it is very fast and used for caching.
value is always string in redis.
redis is not case sensitive.

SET [key] [value] --> inserts the key-value pair
GET [key] --> returns the value of the respective key.
DEL [key] --> deletes the key.
KEYS * --> lists all the keys (not their values).

EXISTS [key] --> returns an integer(0/1) depending upon whether the key is present or not.
FLUSHALL --> clears the redis contents.

TTL [key] --> returns an integer that tells how much time the key will be present in the server. 
				-1 means it is permanent.
				-2 means it has expired i.e. no longer present.
				non-negative values tells that how much seconds it will be present in the server.

EXPIRE [key] [time] --> In how many seconds the key will expire.
SETEX [key] [time] [value] --> inserts the key-value with the expiry time.




//How to insert, delete , add elements to an array in redis

lpush [key] [value...] -> inserts the values at the start of the [key] array.
rpush [key] [value...] -> inserts the values at the end of the [key] array.

lpop [key] [count: optional] -> deletes the value at the start of the [key] array.
rpop [key] [count: optional] -> deletes the value at the end of the [key] array.
by default count is 1.

lrange [key] [start index] [end index: inclusive] -> displays the content of [key] array from the start index to end index.


// Arrays can have duplicate values but sets don't.
sets do not contain duplicates and are sorted (integers).

SADD [key] [values...] --> Inserts the values into the set.
SMEMBERS [key] --> displays the members of the set.
SPOP [key] [count: optional] --> pops a random element from the set.


// How to insert object as a key-value pair using HSET.

HSET [object-name] [object-key] [object-value] --> inserts the key value pair in the object.
HGET [object-name] [object-key] --> returns the value of the object-key.
HGETALL [object-name] --> returns all the key-value pairs in the object.
HDEL [object-name] [object-key] --> deletes the object-key from the object.
HEXISTS [object-name] [object-key] --> returns integer which tells us that whether the key is present in the object or not.


// PUB-SUB
SUBSCRIBE [channel-name] --> subscribe to a channel
PUBLISH  [channel-name] [message] --> publish a message to the channel.

PSUBSCRIBE [pattern] --> subscribe to all the channel that matchnes the given pattern.

UNSUBSCRIBE [channel-name] --> unsubsrice to the channel.
PUNSUBSCRIBE [pattern] --> unsubscribe to all the channel that matchnes the given pattern.

// Streams

It added to redis in version 5.0 to solve the issue of history in redis. PUB-SUB do not store the history but stream does and it is scalable.

/ XADD

XADD [stream-name] [key] [field1] [value1] [field2] [value2] .....
XADD [stream] [*(for automatic key generation)] ....

XADD [stream] MAXLEN [Length] * [field] [value] --> defines a size of stream

/ XREAD

XREAD STREAMS [stream] [start-key] --> displays all the entries from the start key.
XREAD COUNT [length] STREAMS [stream] [start-key] --> displays [length] rows from the start key.

XREAD BLOCK [time] STREAMS [stream] [start-key] --> blocks the connection after [time] ,if it receives any entry it displays the entries.

XREAD BLOCK 0 STREAMS [stream] [start-key] --> it does not block the stream indefinitely.

XREAD BLOCK 10000 STREAMS [stream] $ --> shows in realtime the entries and blocks after 10000msec.


/ XRANGE

XRANGE [stream] [start] [end] --> displays all entries between start and end inclusive.
XRANGE [stream] [start] [end] COUNT [number] --> displays [number] all entries between start and end inclusive.

XRANGE [stream] - + --> displays all the entries in the stream.
XRANGE [stream] - + COUNT 10 --> displays the first 10 entries from the start of the table.


XREVRANGE [stream] + - --> displays all the entries in reverse order ie from last to first.
XREVRANGE [stream] + - COUNT 10 --> displays last 10 entries in the reverse order.