import socket
import sys

message="no message"
if len(sys.argv) > 1:
    message=sys.argv[1]

ip="127.0.0.1"
port = 9999

client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

client.sendto(message.encode(),(ip,port))

response,addr = client.recvfrom(1024)
print(f"response from server: {response.decode(),addr} ")
