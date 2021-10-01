import 'dart:io';

void main(List<String> args) {
  String name = stdin.readLineSync()!;
  String univ = stdin.readLineSync()!;
  String reason = stdin.readLineSync()!;

  print("Nama: $name");
  print("Univ/Jurusan: $univ");
  print("Alasan ingin masuk GDSC: $reason");
}
