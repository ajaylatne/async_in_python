import asyncio
import time

start = time.time()

async def get_movie_ticket():
    await asyncio.sleep(5)
    print('Got movie ticket')
    
async def like_ig_post():
    await asyncio.sleep(7)
    print('liked ig post')
    
async def main():
    task1 = asyncio.create_task( get_movie_ticket() )
    task2 = asyncio.create_task( like_ig_post() )
    await task1
    await task2 
asyncio.run( main() )

end = time.time()
print(end-start, '******************************')
