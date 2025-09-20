from multiprocessing import Process,Manager
import time

def process_worker(num):
    for i in range(5000):
        print('done')


if __name__ == "__main__": 
    
    processes = []

    for i in range(2):
        p=Process(target=process_worker,name="ahmet processi",args=(i,))
        p.start()
        processes.append(p)
        p.join()

    #for p in processes:
        


