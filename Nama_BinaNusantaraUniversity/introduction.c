#include <stdio.h>

int main() {
//	Iseng gan pake string
	char iseng[][100] = {
	"Fajar Muhammad Hamka",
	"Computer Science",
	"Ingin mencari relasi dan materi yang berhubungan dengan google"				
	};
	
//	Spasinya samain lah ya biar kayak competitive programming
	printf("Nama : %s\n", iseng[0]);
	printf("Jurusan : %s\n", iseng[1]);
	printf("Alasan ingin masuk GDSC : %s\n", iseng[2]);
	return 0;
}
