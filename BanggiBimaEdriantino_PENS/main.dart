class Member {  
  String name = 'Banggi Bima Edriantino';  
  String major = 'Teknik Informatika';  
  String reason = 'Untuk menambah relasi dengan semua teman yang berminat di bidang pemrograman';  
   
  void display() { 
    print('Nama : $name'); 
    print('Jurusan : $major'); 
    print('Alasan ingin masuk GDSC : $reason'); 
  }
}

void main() { 
  Member student = new Member(); 
  student.display(); 
}