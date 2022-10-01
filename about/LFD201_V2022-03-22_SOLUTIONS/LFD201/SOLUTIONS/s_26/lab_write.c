/* **************** LFD201:2022-02-16 s_26/lab_write.c **************** */
/*
 * The code herein is: Copyright the Linux Foundation, 2022
 *
 * This Copyright is retained for the purpose of protecting free
 * redistribution of source.
 *
 *     URL:    https://training.linuxfoundation.org
 *     email:  info@linuxfoundation.org
 *
 * This code is distributed under Version 2 of the GNU General Public
 * License, which you should have received with the source.
 *
 */
#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <stdlib.h>
#include <string.h>
#include <stdlib.h>
#include <sys/stat.h>

int main(int argc, char *argv[])
{
	int fd, rc;
	char *buffer = "TESTING A WRITE";

	fd = open("./afile", O_RDWR | O_CREAT | O_TRUNC, S_IRUSR | S_IWUSR);
	rc = write(fd, buffer, strlen(buffer));
	printf("wrote %d bytes\n", rc);
	close(fd);
	exit(EXIT_SUCCESS);
}
