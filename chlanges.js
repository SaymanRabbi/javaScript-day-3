// ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.

// var number = 90;

// if (number >= 90){
//     console.log("You Got A+");
// }
// else if (number >= 80 && number < 90) {
//  console.log("You Got A")
// }
// else if ( number >= 70 && number < 80){
// console.log("You Got C")
// }
// else if ( number >= 50 && number < 70){
//     console.log("You Got D")
// }
// else {
//         console.log("You Bal Pakna Dabba Marchosh")
// };
// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 

// var singel = 'white';

// if (singel == 'red'){
//     console.log("Its Danger Don't Go");
// }
// else if (singel == 'yello'){
//     console.log("You Sholud Stop Now");
// }
// else if (singel == 'green'){
//     console.log("You Have To Go Now")
// }
// else {
//     console.log("BalPakna Tor Jaowr Dorkar Nai")
// };
// -----or oparetor------

// var isTrue = 5<6;
// var isFalse = 5>6;
// var check = isTrue || isFalse;
// console.log(check);
// ------ and oparetor-----
var isTrue = 5<6;
var isFalse = 7>6;
var check = isTrue && isFalse;
console.log(check);