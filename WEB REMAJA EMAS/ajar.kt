fun main(args: Array<String>) {
    println('HelloWorld')
}

val time = 22
if (time < 10) {
  println("Good morning.")
} else if (time < 20) {
  println("Good day.")
} else {
  println("Good evening.")
}
// Outputs "Good evening."

val day = 7

val result = when (day) {
  1 -> "Monday"
  2 -> "Tuesday"
  3 -> "Wednesday"
  4 -> "Thursday"
  5 -> "Friday"
  6 -> "Saturday"
  7 -> "Sunday"
  else -> "Invalid day."
}
println(result)

// Outputs "Thursday" (day 7)

// LATIHAN MEMBUAT PERHITUNGAN SUHU
fun main() {

  val suhuc = 15
  val suhur = 4 * suhuc / 5 // SUHU REAMUR
   println(suhur)
  val suhuf = 9 * suhuc / 5 + 32 // SUHU FAHRENHEIT
   println(suhuf)
  
  if (suhuc < -10) {
    println("SANGAT DINGIN")
  } else if (suhuc < 0) {
    println("DINGIN")
  } else if (suhuc < 20) {
    println("CUKUP DINGIN")
  } else if (suhuc < 30) {
    println("PANAS")
  } else {
    println("SANGAT PANAS")
  }
}