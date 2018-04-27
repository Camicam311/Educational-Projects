dosseg
.model small
.stack 100h

.data
fibonacci dw 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0

.code
main proc
	mov ax,@data
	mov ds,ax
	mov bx, offset fibonacci
	mov [bx], word ptr 1
	add bx, 2
	mov [bx], word ptr 1
	sub bx, 2
	mov cx, 18

fnums:
	mov dx, [bx]
	add bx, 4
	mov [bx], dx
	sub bx, 2
	mov dx, [bx]
	add bx, 2
	add [bx], dx
	sub bx, 2
	loop fnums
main endp
end main