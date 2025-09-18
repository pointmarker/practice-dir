import socket
import threading

host = "0.0.0.0"
port = 9999

server = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
server.bind((host,port))

## this will use for making server non-blocking
server.settimeout(1)

print(f"port listening on {host} : {port}")

def handle_message(data,addr):
    print(f"Received from {addr}: {data.decode()}")
    server.sendto("Ping received".encode(),addr)

## when you use thread, and recvfrom
# system can block keyboard inputs,
# its waiting in the recvfrom line to have an input
# the one way to prevent this,
# throwing timeout, catching it and say to machine keep going
# this way you can stop server with ctrl+c
try:
    while True:
        try:
            data,addr = server.recvfrom(1024)
            client_thread = threading.Thread(target=handle_message, args=(data,addr))
            client_thread.start()
        except socket.timeout:
            continue
except KeyboardInterrupt: 
    print('\nsystem shutting down')
    server.close()