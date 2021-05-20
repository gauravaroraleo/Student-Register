Student_List = [];

function submit() {
    student1 = document.getElementById("name1").value;
    student2 = document.getElementById("name2").value;
    student3 = document.getElementById("name3").value;
    student4 = document.getElementById("name4").value;
    Student_List.push(student1);
    Student_List.push(student2);
    Student_List.push(student3);
    Student_List.push(student4);
    document.getElementById("displaynames").innerHTML = Student_List;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block"
}

function sort() {
    Student_List.sort();
    document.getElementById("displaynames").innerHTML = Student_List;

}
