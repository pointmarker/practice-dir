import threading
import time
from multiprocessing import Process,Manager

def thread_worker(num,statuses):
    for i in range(5):
        statuses[f"Thread-{num}"] = f"Adım {i}"
        time.sleep(1)
    statuses[f"Thread-{num}"] = "Thread Bitti"
    print(statuses[f"Thread-{num}"])

def process_worker(num,statuses):
    for i in range(5):
        statuses[f"Process-{num}"] = f"Adım {i}"
        time.sleep(1)
    statuses[f"Process-{num}"] = "Process Bitti"
    print(statuses[f"Process-{num}"])

if __name__ == "__main__": 
    manager = Manager()
    statuses = manager.dict()

    threads = []
    processes = []

    for i in range(2):
        statuses[f"Thread-{i}"] = "Hazır"
        t = threading.Thread(target=thread_worker,args=(i,statuses))
        threads.append(t)
        t.start()

    for i in range(2):
        statuses[f"Process-{i}"] = "Hazır"
        p = Process(target=process_worker, args=(i, statuses))
        processes.append(p)
        p.start()


    for t in threads:
        t.join()

    for p in processes:
        p.join()
