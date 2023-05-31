async function add() {
  const b = document.getElementById("1").value;
  const desc = document.getElementById("2").value;
  const cat = document.getElementById("3").value;

  const myb = {
    budget: b,
    desc: desc,
    catgry: cat,
  };

  try {
    await axios.post('http://localhost:8000/expensend', myb);
    console.log("data sent");
  } catch (error) {
    console.error(error);
  }
}

async function displayItems(data) {
  const u = document.querySelector(".list");
  u.innerHTML = "";

  data.forEach(async myb => {
    let l = document.createElement("li");
    let st = myb.budget + "$" + "  " + myb.desc + "  " + myb.catgry + " ";
    l.textContent = st;
    l.className = "list-group-item";

    let Delete = document.createElement("input");
    Delete.type = "button";
    Delete.value = "Delete";
    Delete.className = "btn btn-danger btn-sm";
    Delete.onclick = async () => {
      
        await axios.delete(`http://localhost:8000/deleteexpen/${myb.id}`);
        u.removeChild(l);
    
    };

    let ed = document.createElement("input");
    ed.type = "button";
    ed.className = "btn btn-warning btn-sm mr-2";
    ed.value = "Edit";
    ed.onclick = () => {
      axios.delete(`http://localhost:8000/deleteexpen/${myb.id}`).then();
      u.removeChild(l);
      document.getElementById("1").value = myb.b;
      document.getElementById("2").value = myb.desc;
      document.getElementById("3").value = myb.cat;
    };

    l.appendChild(ed);
    l.appendChild(Delete);
    u.appendChild(l);
  });
}

window.onload = async function () {
  try {
    const response = await axios.get(`http://localhost:8000/expendata`);
    displayItems(response.data.info);
  } catch (error) {
    console.error(error);
  }
};
