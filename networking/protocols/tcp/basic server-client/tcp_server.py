import socket 
import threading

##########################################
### we can make our own server to ping ###
##########################################

bind_ip = "0.0.0.0"
bind_port = 9999

server = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
server.bind((bind_ip,bind_port))
# we tell the service to start listening with 
# a maximum backlog of content set to 5
server.listen(5)

print(f"[+] listening on port {bind_ip} : {bind_port}")

def handle_client(client_socket):
    # printing what the client sends
    request = client_socket.recv(1024)
    print(f"[+] Received: {request.decode()}")
    # sending back the packet
    client_socket.send("Ping received".encode())
    client_socket.close()

while True:
    # when a client connects we receive the
    # client socket into the client variable, and
    # the remote connection details into the addr variable
    client,addr = server.accept()
    print(f"[+] Accepted connection from: {addr[0]}: {addr[1]}")
    # spin up our client thread to handle the incoming data
    client_handler = threading.Thread(target=handle_client,args=(client,))
    client_handler.start()




