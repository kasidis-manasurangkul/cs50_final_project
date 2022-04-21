function addcart(
  car_id,
  id,
  type,
  effective_date,
  max_price,
  discount,
  total_price,
  sum_insure,
  brand,
  model,
  license
) {
  let insurance = {
    car_id: car_id,
    insurance_id: id,
    insurance_type: type,
    insurance_discount: discount,
    insurance_maxprice: max_price,
    insurance_date: effective_date,
    insurance_price: total_price,
    insurance_sum: sum_insure,
    insurance_brand: brand,
    insurance_model: model,
    insurance_license: license,
  };
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(insurance);
  localStorage.setItem("cart", JSON.stringify(cart));
  load();
  window.location.reload();
}

function load() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  document.getElementById("insurance_cart").innerHTML =
    cart && cart.length ? cart.length : 0;
}
function modal() {
  const open = document.getElementById("open");
  const modal_container = document.getElementById("modal_container");
  const close1 = document.getElementById("close1");
  const close2 = document.getElementById("close2");

  open.addEventListener("click", function () {
    modal_container.classList.add("show");
  });
  close1.addEventListener("click", function () {
    modal_container.classList.remove("show");
  });
  close2.addEventListener("click", function () {
    modal_container.classList.remove("show");
  });
}
function modal2() {
  const open21 = document.getElementById("open21");
  const modal_container2 = document.getElementById("modal_container2");
  const close21 = document.getElementById("close21");
  const close22 = document.getElementById("close22");

  open21.addEventListener("click", function () {
    modal_container2.classList.add("show");
  });
  close21.addEventListener("click", function () {
    modal_container2.classList.remove("show");
  });
  close22.addEventListener("click", function () {
    modal_container2.classList.remove("show");
  });
}

function cartlist() {
  var carts = JSON.parse(localStorage.getItem("cart"));

  if (carts) {
    for (let i = 0; i < carts.length; i++) {
      var div1 = document.createElement("div");
      div1.style.display = "inline-block";
      div1.style.lineHeight = "26px";

      var div2_1 = document.createElement("div");
      div2_1.setAttribute("class", "box18");
      div2_1.style.display = "inline-block";

      var div2_2 = document.createElement("div");
      div2_2.setAttribute("class", "box19");
      div2_2.style.display = "inline-block";

      var div2_3 = document.createElement("div");
      div2_3.setAttribute("class", "box20");
      div2_3.style.display = "inline-block";

      var span1 = document.createElement("span");
      span1.setAttribute("class", "head8");

      var span2 = document.createElement("span");
      span2.setAttribute("class", "head8");

      var img1 = document.createElement("img");
      img1.setAttribute("class", "img5");
      img1.setAttribute("src", "/static/trash_bin_icon-icons.com_67981.png");

      var br = document.createElement("br");
      let tv = "ประเภท " + carts[i]["insurance_type"];
      let t = document.createTextNode(tv);

      let pv = carts[i]["insurance_price"] + " บ.";
      let p = document.createTextNode(pv);

      cv = "removeproduct(" + i + ")";
      img1.setAttribute("onclick", cv);

      div1.appendChild(div2_1);
      div1.appendChild(div2_2);
      div1.appendChild(div2_3);
      div2_1.appendChild(span1);
      div2_2.appendChild(span2);
      div2_3.appendChild(img1);
      span1.appendChild(t);
      span2.appendChild(p);

      document.getElementById("product").appendChild(div1);
    }
  }
  let totalv = 0;
  if (carts) {
    for (let i = 0; i < carts.length; i++) {
      totalv += carts[i]["insurance_price"];
    }
  }
  totalv = totalv.toString() + " บ.";
  document.getElementById("total").innerHTML =
    '<div style="display: inline-block;">' +
    '<div style="display: inline-block;" class="box18"><span class="head8">รวม</span></div>' +
    '<div style="display: inline-block;" class="box19"><span class="head8">' +
    totalv +
    "</span>" +
    "</div>" +
    "</div>";
}

function removeproduct(key) {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(key, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  load();
  window.location.reload();
}

function renew() {
  var carts = JSON.parse(localStorage.getItem("cart"));

  if (carts) {
    for (let i = 0; i < carts.length; i++) {
      var divhead = document.createElement("div");
      divhead.style.marginBottom = "44px";

      var s1 = document.createElement("span");
      s1.setAttribute("class", "head10 font-weight-bold");

      var s2 = document.createElement("span");
      s2.setAttribute("class", "head10");

      var s3 = document.createElement("span");
      s3.setAttribute("class", "head10");

      var s4 = document.createElement("span");
      s4.setAttribute("class", "head10");

      var s5 = document.createElement("span");
      s5.setAttribute("class", "head10");

      var s6 = document.createElement("span");
      s6.setAttribute("class", "head10");

      var s7 = document.createElement("span");
      s7.setAttribute("class", "head10");

      var s8 = document.createElement("span");
      s8.setAttribute("class", "head10");

      let br1 = document.createElement("br");
      let br2 = document.createElement("br");
      let br3 = document.createElement("br");
      let br4 = document.createElement("br");
      let br5 = document.createElement("br");
      let br6 = document.createElement("br");
      let br7 = document.createElement("br");
      let br8 = document.createElement("br");

      var hr1 = document.createElement("hr");
      hr1.setAttribute("class", "spliter4");

      let brandv = "ยี่ห้อรถ: " + carts[i]["insurance_brand"];
      let brand = document.createTextNode(brandv);

      let modelv = "รุ่นรถ: " + carts[i]["insurance_model"];
      let model = document.createTextNode(modelv);

      let licensev = "ทะเบียนรถ: " + carts[i]["insurance_license"];
      let license = document.createTextNode(licensev);

      let typev = "ประเภทประกันภัยที่ต่ออายุ: " + carts[i]["insurance_type"];
      let type = document.createTextNode(typev);

      let sumv = "ทุนประกัน: " + carts[i]["insurance_sum"] + " บ.";
      let sum = document.createTextNode(sumv);

      let datev = "ครบรอบต่ออายุ: " + carts[i]["insurance_date"];
      let date = document.createTextNode(datev);

      let pricev = "เบี้ยประกันเต็ม: " + carts[i]["insurance_price"] + " บ.";
      let price = document.createTextNode(pricev);

      let maxpricev =
        "เบี้ยประกันรวม: " + carts[i]["insurance_maxprice"] + " บ.";
      let maxprice = document.createTextNode(maxpricev);

      divhead.appendChild(s1);
      divhead.appendChild(br1);
      divhead.appendChild(s2);
      divhead.appendChild(br2);
      divhead.appendChild(s3);
      divhead.appendChild(br3);
      divhead.appendChild(s4);
      divhead.appendChild(br4);
      divhead.appendChild(s5);
      divhead.appendChild(br5);
      divhead.appendChild(s6);
      divhead.appendChild(br6);
      divhead.appendChild(s7);
      divhead.appendChild(br7);
      divhead.appendChild(s8);
      divhead.appendChild(br8);
      divhead.appendChild(hr1);

      s1.appendChild(brand);
      s2.appendChild(model);
      s3.appendChild(license);
      s4.appendChild(type);
      s5.appendChild(sum);
      s6.appendChild(date);
      s7.appendChild(maxprice);
      s8.appendChild(price);

      document.getElementById("renew_detail").appendChild(divhead);
    }
  }
  let maxprice_totalv = 0;
  if (carts) {
    for (let i = 0; i < carts.length; i++) {
      maxprice_totalv += carts[i]["insurance_maxprice"];
    }
  }
  let discount_totalv = 0;
  if (carts) {
    for (let i = 0; i < carts.length; i++) {
      discount_totalv += carts[i]["insurance_discount"];
    }
  }
  let price_totalv = 0;
  if (carts) {
    for (let i = 0; i < carts.length; i++) {
      price_totalv += carts[i]["insurance_price"];
    }
  }

  maxprice_totalv = maxprice_totalv.toString() + " บ.";
  discount_totalv = discount_totalv.toString() + " บ.";
  price_totalv = price_totalv.toString() + " บ.";
  document.getElementById("payment_amount").innerHTML =
    '<span class="head10">เบี้ยประกันเต็ม: ' +
    maxprice_totalv +
    "</span><br>" +
    '<span class="head10">ส่วนลด: ' +
    discount_totalv +
    "</span><br>" +
    '<span class="head10 font-weight-bold">ยอดชำระรวม: ' +
    price_totalv +
    "</span><br></br>";
}
// function post() {
//   axios.post("/user_renew", carts).then(
//     (response) => {
//       var result = response.data;
//       console.log(result);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }
async function post() {
  var carts = localStorage.getItem("cart");
  try {
    var formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("bank", document.getElementById("bank").value);
    formData.append("amount", document.getElementById("amount").value);
    formData.append("carts", carts);
    formData.append("filename", document.getElementById("real_file").files[0]);

    const { data } = await axios.post("/user_renew", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (data.result) {
      window.location.href = "/user_confirm";
    }
  } catch (error) {
    console.log(error);
  }

  localStorage.removeItem("cart");
}

function h(histories) {
  let rows = {};
  for (history in histories) {
    let row = { id: history[0], status: history[1] };
    rows.push(row);
  }
  localStorage.setItem("histories", JSON.stringify(rows));
}

function status() {
  completes = document.getElementsByName("1");
  incompletes = document.getElementsByName("0");
  if (completes.length != 0) {
    for (let i = 0; i < completes.length; i++) {
      document.getElementsByName("1")[i].innerHTML = "เสร็จสิ้น";
      document
        .getElementsByName("1")
        [i].setAttribute("class", "complete btn formbox5 head7 rounded2");
    }
  }
  if (incompletes.length != 0) {
    for (let i = 0; i < incompletes.length; i++) {
      document.getElementsByName("0")[i].innerHTML = "กำลังดำเนินการ";
      document
        .getElementsByName("0")
        [i].setAttribute("class", "incomplete btn formbox5 head11 rounded2");
    }
  }
}

function returnmain() {
  (window.location.href = "/"), true;
}
var now_category = "user";
var now_method = "latest";

function input_customer_data(data) {
  if (data) {
    var html = [];
    if (now_category == "user") {
      html.push(
        "<div style='display:inline-block;' class='box27 header1'>" +
          '<div style="display:inline-block;" class="head10 locate7">ลำดับ</div>' +
          '<div style="display:inline-block;" class="head10 locate4">code</div>' +
          '<div style="display:inline-block;" class="head10 locate5">ชื่อ-นามสกุล</div>' +
          '<div style="display:inline-block;" class="head10 locate6">เบอร์โทรศัพท์</div>' +
          "</div>"
      );
    }
    if (now_category == "car") {
      html.push(
        "<div style='display:inline-block;' class='box27 header1'>" +
          '<div style="display:inline-block;" class="head10 locate7">ลำดับ</div>' +
          '<div style="display:inline-block;" class="head10 locate4">เลขทะเบียนรถ</div>' +
          '<div style="display:inline-block;" class="head10 locate5">เจ้าของรถ</div>' +
          '<div style="display:inline-block;" class="head10 locate6">รุ่นรถ</div>' +
          "</div>"
      );
    }
    if (now_category == "insurance") {
      html.push(
        "<div style='display:inline-block;' class='box27 header1'>" +
          '<div style="display:inline-block;" class="head10 locate7">ลำดับ</div>' +
          '<div style="display:inline-block;" class="head10 locate4">วันที่คุ้มครอง</div>' +
          '<div style="display:inline-block;" class="head10 locate5">ผู้เอาประกันภัย</div>' +
          '<div style="display:inline-block;" class="head10 locate6">ประเภท</div>' +
          "</div>"
      );
    }

    for (let i = 0; i < data.length; i++) {
      if (now_category == "user") {
        html.push(
          "<a href='/user_edit?user_id=" +
            data[i][0] +
            "'><div style='display:inline-block;' class='box28'>" +
            "<div style='display:inline-block;' class='head10 locate7'>" +
            (i + 1) +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate4'>" +
            data[i][4] +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate5'>" +
            data[i][1] +
            " " +
            data[i][2] +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate6'>" +
            data[i][3] +
            "</div>" +
            "</div></a>"
        );
      }

      if (now_category == "car") {
        html.push(
          "<a href='/user_edit?user_id=" +
            data[i][0] +
            "'><div style='display:inline-block;' class='box28'>" +
            "<div style='display:inline-block;' class='head10 locate7'>" +
            (i + 1) +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate4'>" +
            data[i][3] +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate5'>" +
            data[i][4] +
            " " +
            data[i][5] +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate6'>" +
            data[i][1] +
            " " +
            data[i][2] +
            "</div>" +
            "</div></a>"
        );
      }

      if (now_category == "insurance") {
        html.push(
          "<a href='/user_edit?user_id=" +
            data[i][0] +
            "'><div style='display:inline-block;' class='box28'>" +
            "<div style='display:inline-block;' class='head10 locate7'>" +
            (i + 1) +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate4'>" +
            data[i][1] +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate5'>" +
            data[i][3] +
            " " +
            data[i][4] +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate6'>" +
            data[i][2] +
            "</div>" +
            "</div></a>"
        );
      }
    }
    document.getElementById("customer").innerHTML = html.join("");
  }
}
async function get_customer(category) {
  try {
    const { data } = await axios.get(
      "/catesortsearch/" + now_method + "/" + category + "?q=" + ""
    );
    now_category = category;
    input_customer_data(data);
  } catch (error) {
    console.log(error);
  }
}
async function sort_customer(method) {
  try {
    const { data } = await axios.get(
      "/catesortsearch/" + method + "/" + now_category + "?q=" + ""
    );
    now_method = method;
    input_customer_data(data);
  } catch (error) {
    console.log(error);
  }
}

function search() {
  let input = document.getElementById("search");
  input.addEventListener("keyup", async function () {
    try {
      const { data } = await axios.get(
        "/catesortsearch/" +
          now_method +
          "/" +
          now_category +
          "?q=" +
          input.value
      );
      input_customer_data(data);
    } catch (error) {
      console.log(error);
    }
  });
}

async function get_customer_notification(category) {
  try {
    const { data } = await axios.get(
      "/catesortsearch_notification/" + now_method + "/" + category + "?q=" + ""
    );
    now_category = category;
    input_customer_data_notification(data);
  } catch (error) {
    console.log(error);
  }
}

async function sort_customer_notification(method) {
  try {
    const { data } = await axios.get(
      "/catesortsearch_notification/" + method + "/" + now_category + "?q=" + ""
    );
    now_method = method;
    console.log(data);
    input_customer_data_notification(data);
  } catch (error) {
    console.log(error);
  }
}

function search_notification() {
  let input = document.getElementById("search");
  input.addEventListener("keyup", async function () {
    try {
      const { data } = await axios.get(
        "/catesortsearch_notification/" +
          now_method +
          "/" +
          now_category +
          "?q=" +
          input.value
      );
      input_customer_data_notification(data);
    } catch (error) {
      console.log(error);
    }
  });
}

function input_customer_data_notification(data) {
  if (data) {
    var html = [];
    if (now_category == "insurance") {
      html.push(
        "<div style='display:inline-block;' class='box27 header1'>" +
          '<div style="display:inline-block; margin-left: 0px;" class="head10 locate7">ลำดับ</div>' +
          '<div style="display:inline-block;" class="head10 locate4">วันที่ชำระ</div>' +
          '<div style="display:inline-block;" class="head10 locate5">ผู้เอาประกันภัย</div>' +
          '<div style="display:inline-block;" class="head10 locate6">เบี้ยรวม</div>' +
          '<div style="display:inline-block;" class="head10 locate11">ยืนยัน</div>' +
          "</div>"
      );
    }
    for (let i = 0; i < data.length; i++) {
      if (now_category == "insurance") {
        html.push(
          "<a href='/admin_renew_insurance/" +
            data[i][0] +
            "'><div style='display:inline-block;' class='box28'>" +
            "<div style='display:inline-block; margin-left: -4px;' class='head10 locate7'>" +
            (i + 1) +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate4'>" +
            data[i][1] +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate5'>" +
            data[i][3] +
            " " +
            data[i][4] +
            "</div>" +
            "<div style='display:inline-block;' class='head10 locate6'>" +
            data[i][2] +
            "</div></a>" +
            '<div style="display:inline-block;" class="head10 locate11">' +
            '<img src="/static/emblemdefault_103452.png" alt="edit" class="img9" style="margin-top: -7px; z-index: 3" onclick="admit(' +
            data[i][0] +
            ');">' +
            "</div>" +
            "</div>"
        );
      }
    }
    document.getElementById("customer").innerHTML = html.join("");
  }
}


async function admit(id) {
  try {
    const data = await axios.post("/admit/" + id);
    refresh()
  } catch (error) {
    console.log(error);
  }
}

function expand(id) {
  let block = document.getElementById(id);
  let hblock = document.getElementById("h" + id);
  if ((block.style.display == "none")) {
    block.style.display = "block";
    hblock.childNodes[1].style.transform = "rotate(180deg)";
  } else {
    block.style.display = "none";
    hblock.childNodes[1].style.transform = "rotate(360deg)";
  }
}
function refresh() {
    location.reload();
}
let car_n = 1;
function clone(div_id, clone_id) {
    var div1 = document.createElement("div");
    div1.id = "car_creating" + car_n
    div1.setAttribute("name", "car");
    div1.setAttribute("class", "select_car");

    var label1 = document.createElement("label");
    label1.setAttribute("class", "head10");
    label1.style.marginRight = '5px'
    var label2 = document.createElement("label");
    label2.setAttribute("class", "head10");
    label2.style.marginRight = "5px";
    var label3 = document.createElement("label");
    label3.setAttribute("class", "head10");
    label3.style.marginRight = "5px";

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");

    var input1 = document.createElement("input")
    input1.setAttribute("class", "head13");
    input1.placeholder = "เปลี่ยนยี่ห้อ"
    input1.type = "text"
    input1.name = "brand" + car_n;

    var input2 = document.createElement("input")
    input2.setAttribute("class", "head13");
    input2.placeholder = "เปลี่ยนรุ่น"
    input2.type = "text"
    input2.name = "model" + car_n;

    var input3 = document.createElement("input")
    input3.setAttribute("class", "head13");
    input3.placeholder = "เปลี่ยนเลขทะเบียนรถ"
    input3.type = "text"
    input3.name = "license_number" + car_n;

    var img1 = document.createElement("img");
    img1.setAttribute("class", "img11");
    img1.style.position = "absolute"
    img1.style.marginTop = "8px"
    img1.style.marginLeft = "-328px"
    img1.setAttribute("onclick", "del_clone('" + car_n + "');");
    img1.setAttribute(
      "src",
      "/static/4105964-collapse-minus-reduce-remove_113927.png"
    );
    
    var brand = document.createTextNode("ยี่ห้อ:");
    var model = document.createTextNode("รุ่น:");
    var license_number = document.createTextNode("เลขทะเบี่ยนรถ:");

    div1.appendChild(label1);
    div1.appendChild(input1);
    div1.appendChild(img1);
    div1.appendChild(br1);
    div1.appendChild(label2);
    div1.appendChild(input2);
    div1.appendChild(br2);
    div1.appendChild(label3);
    div1.appendChild(input3);
    div1.appendChild(br3);
    div1.appendChild(br4);

    label1.appendChild(brand);
    label2.appendChild(model);
    label3.appendChild(license_number);
    
    car_n += 1
    document.getElementById("parent_car").appendChild(div1);

    // console.log(div_id, clone_id)
    // var original = document.getElementById(clone_id)
    // var box = document.getElementById(div_id);
    // var clone = original.cloneNode(true);
    // clone.id = clone.id + car_n;
    // child_clone = clone.getElementsByClassName("head13");
    // for (let i = 0; i < child_clone.length; i++) {
    //     child_clone[i].name = child_clone[i].name + car_n;
    // }
    // clone.getElementsByClassName("img11")[0].onclick = 'del_clone(' + car_n + ')'
    // car_n += 1;
    // console.log(car_n)
    // box.appendChild(clone);
}
let n_insertion_insurance = 1
function insertion_insurance_clone(car_id){
    var div1 = document.createElement("div");
    div1.id = "insertion_insurance_child" + car_id + n_insertion_insurance;
    div1.setAttribute("name", "insertion_insurance" + car_id);
    div1.setAttribute("class", "select_insurance" + car_id);

    var label1 = document.createElement("label");
    label1.setAttribute("class", "head10");
    label1.style.marginRight = "5px";
    var label2 = document.createElement("label");
    label2.setAttribute("class", "head10");
    label2.style.marginRight = "5px";
    var label3 = document.createElement("label");
    label3.setAttribute("class", "head10");
    label3.style.marginRight = "5px";
    var label4 = document.createElement("label");
    label4.setAttribute("class", "head10");
    label4.style.marginRight = "5px";
    var label5 = document.createElement("label");
    label5.setAttribute("class", "head10");
    label5.style.marginRight = "5px";

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");
    var br6 = document.createElement("br");

    var input1 = document.createElement("input")
    input1.setAttribute("class", "head13");
    input1.placeholder = "เพิ่มประเภทประกันภัย";
    input1.type = "text"
    input1.name = "type" + car_id + n_insertion_insurance;

    var input2 = document.createElement("input")
    input2.setAttribute("class", "head13");
    input2.placeholder = "เพิ่มวันที่คุ้มครอง";
    input2.type = "text"
    input2.name = "effective_date" + car_id + n_insertion_insurance;

    var input3 = document.createElement("input")
    input3.setAttribute("class", "head13");
    input3.placeholder = "เพิ่มทุนประกัน";
    input3.type = "text"
    input3.name = "sum_insure" + car_id + n_insertion_insurance;

    var input4 = document.createElement("input")
    input4.setAttribute("class", "head13");
    input4.placeholder = "เพิ่มเบี้ยประกัน";
    input4.type = "text"
    input4.name = "price" + car_id + n_insertion_insurance;

    var input5 = document.createElement("input")
    input5.setAttribute("class", "head13");
    input5.placeholder = "เพิ่มส่วนลด";
    input5.type = "text"
    input5.name = "discount" + car_id + n_insertion_insurance;

    var img1 = document.createElement("img");
    img1.setAttribute("class", "img11");
    img1.style.position = "absolute"
    img1.style.marginTop = "5px"
    img1.style.marginLeft = "-436px"
    img1.setAttribute("onclick", "del_insertion_insurance_clone('" + n_insertion_insurance + "', '" + car_id + "');")
    img1.setAttribute(
      "src",
      "/static/4105964-collapse-minus-reduce-remove_113927.png"
    );
    
    var type = document.createTextNode("ประเภทประกันภัย: ");
    var effective_date = document.createTextNode("วันที่คุ้มครอง: ");
    var sum_insure = document.createTextNode("ทุนประกัน: ");
    var price = document.createTextNode("เบี้ยประกัน: ");
    var discount = document.createTextNode("ส่วนลด: ");

    div1.appendChild(label1);
    div1.appendChild(input1);
    div1.appendChild(img1);
    div1.appendChild(br1);
    div1.appendChild(label2);
    div1.appendChild(input2);
    div1.appendChild(br2);
    div1.appendChild(label3);
    div1.appendChild(input3);
    div1.appendChild(br3);
    div1.appendChild(label4);
    div1.appendChild(input4);
    div1.appendChild(br4);
    div1.appendChild(label5);
    div1.appendChild(input5);
    div1.appendChild(br5);
    div1.appendChild(br6);

    label1.appendChild(type);
    label2.appendChild(effective_date);
    label3.appendChild(sum_insure);
    label4.appendChild(price);
    label5.appendChild(discount);
    n_insertion_insurance += 1
    document.getElementById("insurance_parent" + car_id).appendChild(div1);
}

function del_clone(id) {
    var box = document.getElementById("car_creating" + id);
    var big_box = document.getElementById("parent_car");
    big_box.removeChild(box);
}

function del_insertion_insurance_clone(id, car_id) {
    var box = document.getElementById('insertion_insurance_child' + car_id + id);
    var big_box = document.getElementById("insurance_parent" + car_id);
    big_box.removeChild(box);
}

function insurance_refresh(car_id){
    var big_box = document.getElementById("insurance_parent" + car_id);
    var div1 = document.createElement("div");
    div1.id = "insertion_insurance_child" + car_id;
    div1.setAttribute("name", "insertion_insurance" + car_id);
    div1.setAttribute("class", "select_insurance" + car_id);

    var label1 = document.createElement("label");
    label1.setAttribute("class", "head10");
    var label2 = document.createElement("label");
    label2.setAttribute("class", "head10");
    var label3 = document.createElement("label");
    label3.setAttribute("class", "head10");
    var label4 = document.createElement("label");
    label4.setAttribute("class", "head10");
    var label5 = document.createElement("label");
    label5.setAttribute("class", "head10");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var br5 = document.createElement("br");

    var input1 = document.createElement("input");
    input1.setAttribute("class", "head13");
    input1.placeholder = "เพิ่มประเภทประกันภัย";
    input1.type = "text";
    input1.name = "type" + car_id;

    var input2 = document.createElement("input");
    input2.setAttribute("class", "head13");
    input2.placeholder = "เพิ่มวันที่คุ้มครอง";
    input2.type = "text";
    input2.name = "effective_date" + car_id;

    var input3 = document.createElement("input");
    input3.setAttribute("class", "head13");
    input3.placeholder = "เพิ่มทุนประกัน";
    input3.type = "text";
    input3.name = "sum_insure" + car_id;

    var input4 = document.createElement("input");
    input4.setAttribute("class", "head13");
    input4.placeholder = "เพิ่มเบี้ยประกัน";
    input4.type = "text";
    input4.name = "price" + car_id;

    var input5 = document.createElement("input");
    input5.setAttribute("class", "head13");
    input5.placeholder = "เพิ่มส่วนลด";
    input5.type = "text";
    input5.name = "discount" + car_id;

    var img1 = document.createElement("img");
    img1.setAttribute("class", "img11");
    img1.style.position = "absolute";
    img1.style.marginTop = "5px";
    img1.style.marginLeft = "-436px";
    img1.setAttribute("onclick","del_insertion_insurance_clone('" +
        "', '" +
        car_id +
        "');"
    );
    img1.setAttribute(
        "src",
        "/static/4105964-collapse-minus-reduce-remove_113927.png"
    );

    var type = document.createTextNode("ประเภทประกันภัย: ");
    var effective_date = document.createTextNode("วันที่คุ้มครอง: ");
    var sum_insure = document.createTextNode("ทุนประกัน: ");
    var price = document.createTextNode("เบี้ยประกัน: ");
    var discount = document.createTextNode("ส่วนลด: ");

    div1.appendChild(label1);
    div1.appendChild(input1);
    div1.appendChild(img1);
    div1.appendChild(br1);
    div1.appendChild(label2);
    div1.appendChild(input2);
    div1.appendChild(br2);
    div1.appendChild(label3);
    div1.appendChild(input3);
    div1.appendChild(br3);
    div1.appendChild(label4);
    div1.appendChild(input4);
    div1.appendChild(br4);
    div1.appendChild(label5);
    div1.appendChild(input5);
    div1.appendChild(br5);

    label1.appendChild(type);
    label2.appendChild(effective_date);
    label3.appendChild(sum_insure);
    label4.appendChild(price);
    label5.appendChild(discount);
    big_box.innerHTML = ''
    big_box.appendChild(div1);
    n_insertion_insurance = 1
}

function get_user_car(){
    var cars = document.getElementsByName('car')
    var cars_output = []
    var user_output = {
        "name_title": document.getElementById("name_title").value,
        "first_name": document.getElementById("first_name").value,
        "last_name": document.getElementById("last_name").value,
        "code": document.getElementById("code").value,
        "phone_number": document.getElementById("phone_number").value,
        "e_mail": document.getElementById("e_mail").value,
        "username": document.getElementById("username").value,
        "hash_password": document.getElementById("hash_password").value
    };
    for (let i = 0; i < cars.length; i++){
        var noid = document.getElementsByClassName("select_car")[i].id
        if(noid.length == 12) {
            noid = ''
        }
        else{
            noid = noid.slice(12);
        }
        car_output = {
            brand: document.getElementsByName("brand" + noid)[0].value,
            model: document.getElementsByName("model" + noid)[0].value,
            license_number: document.getElementsByName("license_number" + noid)[0].value
        }
        console.log(car_output)
        cars_output.push(car_output)
    }
    var form = JSON.parse(localStorage.getItem("form")) || [];
    console.log(form)
    form.push(user_output);
    form.push(cars_output);
    localStorage.setItem("form", JSON.stringify(form));
}

function get_insurance(){
    var form = JSON.parse(localStorage.getItem("form"))
    console.log(form)
    var insurance_form = []
    for (let i = 0; i < form[form.length-1].length; i++){
        var insurance_outputs = [];
        insurance_outputs.push(form[form.length - 1][i]);
        var insurance_output = {
          type: document.getElementsByName("type" + i)[0].value,
          effective_date: document.getElementsByName("effective_date" + i)[0].value,
          sum_insure: document.getElementsByName("sum_insure" + i)[0].value,
          price: document.getElementsByName("price" + i)[0].value,
          discount: document.getElementsByName("discount" + i)[0].value,
        };
        insurance_outputs.push(insurance_output)
        const insurance_box = document.getElementById("insurance_box" + i);
        if (insurance_box.checked) {
            insurance_output = {
                type: document.getElementsByName("type" + i + "copy")[0].value,
                effective_date: document.getElementsByName("effective_date" + i + "copy")[0].value,
                sum_insure: document.getElementsByName("sum_insure" + i + "copy")[0].value,
                price: document.getElementsByName("price" + i + "copy")[0].value,
                discount: document.getElementsByName("discount" + i + "copy")[0].value,
            };
            insurance_outputs.push(insurance_output);
        }
        insurance_form.push(insurance_outputs)
    }
    form.push(insurance_form);
    localStorage.setItem("form", JSON.stringify(form));
    create_post()
}

function get_insertion_insurance(car_id){
    var insurances = document.getElementsByName("insertion_insurance" + car_id);
    var insurances_output = [];
    for (let i = 0; i < insurances.length; i++) {
        var noid = document.getElementsByClassName("select_insurance" + car_id)[i].id;
        console.log(noid)
        if (noid.length == (25 + car_id.length)) {
            noid = "";
        } 
        else {
            noid = noid.slice(25 + car_id.length);
        }
        console.log(noid)
        insurance_output = {
            type: document.getElementsByName("type"+ car_id + noid)[0].value,
            effective_date: document.getElementsByName("effective_date"+ car_id + noid)[0].value,
            sum_insure: document.getElementsByName("sum_insure"+ car_id + noid)[0].value,
            price: document.getElementsByName("price"+ car_id + noid)[0].value,
            discount: document.getElementsByName("discount"+ car_id + noid)[0].value
        };
        console.log(insurance_output);
        insurances_output.push(insurance_output);
    }
    console.log(insurances_output)
    localStorage.setItem("insurance_insertion", JSON.stringify(insurances_output));
    insurance_insertion_post(car_id);
}

async function insurance_insertion_post(car_id) {
  var form = JSON.parse(localStorage.getItem("insurance_insertion"));
  try {
    var formData1 = new FormData();
    console.log(form);
    formData1.append("form", JSON.stringify(form));
    console.log(formData1);

    const { data } = await axios.post("/user_edit/insurance/create?car_id=" + car_id, formData1);
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  localStorage.removeItem("form");
}

async function create_post(){
      var form = JSON.parse(localStorage.getItem("form"));
      try {
        var formData1 = new FormData();
        console.log(form.slice(form.length - 3, form.length - 1))
        formData1.append("form", JSON.stringify(form.slice(form.length - 3, form.length)));
        console.log(formData1)

        const { data } = await axios.post("/admin_create", formData1);
        console.log(data)
        window.location.href = "/user_edit?user_id=" + data ;
      } catch (error) {
        console.log(error);
      }

      localStorage.removeItem("form");
}
function show_form(type){
    if (type == 'insurance'){
        var form = JSON.parse(localStorage.getItem("form"));
        var cars = form[(Object.keys(form).length) - 1];
        var insurance_forms = []
        for (let i = 0; i < cars.length; i++){
            // var selectlist = '<input class="radio" style="margin-top: 7px; margin-right: 3px;" type="checkbox" value="' + String(i) + '" name=' + '"car_checkbox"' + '>' +
            //     '<label class="head10">' + cars[i]['brand'] + ' ' + cars[i]['model'] + ' ' + cars[i]['license_number'] + ' ' + '</label><br>'
            var insurance_form = '<div><span stlye="margin-right: 5px" class="head10 font-weight-bold">' + cars[i]['brand'] + ' ' + cars[i]['model'] + ' ' + cars[i]['license_number'] + '</span>' +
                                 '<label class="head13" style="margin-left: 5px; margin-right: 5px;">เพิ่มประกัน:</label>' +
                                 '<input type="checkbox" style="margin-top: 9px;" class="radio" id="insurance_box' + String(i) + '"onclick="add_checkbox(' + String(i) + ')"' + '></input></div>' +
                                 '<div id="parent_div' + String(i) + '">' +
                                 '<div id="clone_div' + String(i) + '">' +
                                 '<label class="head10" style="margin-right: 5px;">ประเภทประกันภัย:</label>' +
                                 '<input class="head13" name="type' + String(i) + '" type="text" placeholder="เพิ่มประเภทประกันภัย"><br>' +
                                 '<label class="head10" style="margin-right: 5px;">วันที่คุ้มครอง: </label>' +
                                 '<input class="head13" name="effective_date' + String(i) + '" type="text" placeholder="เพิ่มวันที่คุ้มครอง"><br>' +
                                 '<label class="head10" style="margin-right: 5px;">ทุนประกัน:</label>' +
                                 '<input class="head13" name="sum_insure' + String(i) + '" type="text" placeholder="เพิ่มทุนประกัน"><br>' +
                                 '<label class="head10" style="margin-right: 5px;">เบี้ยประกัน:</label>' +
                                 '<input class="head13" name="price' + String(i) + '" type="text" placeholder="เพิ่มเบี้ยประกัน"><br>' +
                                 '<label class="head10" style="margin-right: 5px;">ส่วนลด:</label>' +
                                 '<input class="head13" name="discount' + String(i) + '" type="text" placeholder="เพิ่มส่วนลด"><br>' +
                                 '<hr class="spliter4" style="margin-left: -341px !important; margin-top: 8px;">' +
                                 '<br>' +
                                 '</div>' +
                                 '</div>'
            insurance_forms.push(insurance_form)
        }
        console.log(insurance_forms)
        document.getElementById("insurance_form").innerHTML = insurance_forms.join("");
    }
    // if (type == 'payment'){
    //     var form = JSON.parse(localStorage.getItem("form"));
    //     var insurances = form[(Object.keys(form).length)-1];
    //     console.log(form)
    //     console.log(Object.keys(form).length)
    //     console.log(insurances)
    //     var checkboxs = []
    //     for (let i = 0; i < insurances.length; i++){
    //         console.log(insurances[i]["car"]);
    //         var selectlist = '<input class="radio" style="margin-top: 7px; margin-right: 3px;" type="checkbox" value="' + String(i) + '" name=' + '"insurance_checkbox"' + '>' +
    //             '<label class="head10">' + insurances[i]['car']['brand'] + ' ' + insurances[i]['car']['model'] + ' | ' + insurances[i]['car']['license_number'] + ' | ' + insurances[i]['type'] + ' | ' + insurances[i]['effective_date'] + '</label><br>'
    //         checkboxs.push(selectlist)
    //     }
    //     console.log(checkboxs)
    //     document.getElementById("select_insurance").innerHTML = checkboxs.join('');
    // }
}

function add_checkbox(id) {
    const insurance_box = document.getElementById("insurance_box" + id);
    if (insurance_box.checked) {
        var original = document.getElementById('clone_div' + id);
        var box = document.getElementById('parent_div' + id);
        var clone = original.cloneNode(true);
        clone.id = clone.id + 'copy';
        child_clone = clone.getElementsByClassName("head13");
        for (let i = 0; i < child_clone.length; i++) {
            child_clone[i].name = child_clone[i].name + 'copy';
        }
        box.appendChild(clone);
    }
    else{
        var box = document.getElementById("parent_div" + id);
        box.removeChild(box.lastElementChild);
    }
}

// function car_selection() {
//   var carlist = JSON.parse(localStorage.getItem("car_selection"));
//   var selectlists = [];
//   for (let i = 0; i < carlist.length; i++){
//     var selectlist = '<input class="radio" style="margin-top: 7px; margin-right: 3px;" type="checkbox" name="' + 'car_selection' + String(i) + '" value="' ">
//     <label class="head10">dddddddd</label><br></br>
//   }
//   document.getElementById("insurance_cart").innerHTML =
//     cart && cart.length ? cart.length : 0;
// }
async function get_admin_renew(payment_id) {
  try {
    const { data } = await axios.get("/get_admin_renew/" + payment_id);
    admin_renew(data)
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function admin_renew(data) {

    for (let i = 0; i < data.length; i++) {
      var divhead = document.createElement("div");
      divhead.style.marginBottom = "44px";

      var s1 = document.createElement("span");
      s1.setAttribute("class", "head10 font-weight-bold");
      var s2 = document.createElement("span");
      s2.setAttribute("class", "head10");
      var s3 = document.createElement("span");
      s3.setAttribute("class", "head10");
      var s4 = document.createElement("span");
      s4.setAttribute("class", "head10");
      var s5 = document.createElement("span");
      s5.setAttribute("class", "head10");
      var s6 = document.createElement("span");
      s6.setAttribute("class", "head10");
      var s7 = document.createElement("span");
      s7.setAttribute("class", "head10");
      var s8 = document.createElement("span");
      s8.setAttribute("class", "head10");

      let br1 = document.createElement("br");
      let br2 = document.createElement("br");
      let br3 = document.createElement("br");
      let br4 = document.createElement("br");
      let br5 = document.createElement("br");
      let br6 = document.createElement("br");
      let br7 = document.createElement("br");
      let br8 = document.createElement("br");

      var hr1 = document.createElement("hr");
      hr1.setAttribute("class", "spliter4");

      let brand = document.createTextNode("ยี่ห้อรถ: " + data[i][2]);
      let model = document.createTextNode("รุ่นรถ: " + data[i][3]);
      let license = document.createTextNode("ทะเบียนรถ: " + data[i][4]);
      let type = document.createTextNode("ประเภทประกันภัยที่ต่ออายุ: " + data[i][5]);
      let sum = document.createTextNode("ทุนประกัน: " + data[i][6] + " บ.");
      let date = document.createTextNode("ครบรอบต่ออายุ: " + data[i][7]);
      let price = document.createTextNode("เบี้ยประกันเต็ม: " + data[i][9] + " บ.");
      let maxprice = document.createTextNode("เบี้ยประกันรวม: " + (data[i][9] - data[i][8]) + " บ.");

      divhead.appendChild(s1);
      divhead.appendChild(br1);
      divhead.appendChild(s2);
      divhead.appendChild(br2);
      divhead.appendChild(s3);
      divhead.appendChild(br3);
      divhead.appendChild(s4);
      divhead.appendChild(br4);
      divhead.appendChild(s5);
      divhead.appendChild(br5);
      divhead.appendChild(s6);
      divhead.appendChild(br6);
      divhead.appendChild(s7);
      divhead.appendChild(br7);
      divhead.appendChild(s8);
      divhead.appendChild(br8);
      divhead.appendChild(hr1);

      s1.appendChild(brand);
      s2.appendChild(model);
      s3.appendChild(license);
      s4.appendChild(type);
      s5.appendChild(sum);
      s6.appendChild(date);
      s7.appendChild(maxprice);
      s8.appendChild(price);

      document.getElementById("renew_detail").appendChild(divhead);
    }
  let maxprice_totalv = 0;
  for (let i = 0; i < data.length; i++) {
    maxprice_totalv += data[i][9];
  }
  let discount_totalv = 0;
  for (let i = 0; i < data.length; i++) {
    discount_totalv += data[i][8];
  }
  let price_totalv = 0;
  for (let i = 0; i < data.length; i++) {
    price_totalv += (data[i][9] - data[i][8]);
  }

  maxprice_totalv = maxprice_totalv.toString() + " บ.";
  discount_totalv = discount_totalv.toString() + " บ.";
  price_totalv = price_totalv.toString() + " บ.";
  document.getElementById("payment_amount").innerHTML =
    '<span class="head10">เบี้ยประกันเต็ม: ' +
    maxprice_totalv +
    "</span><br>" +
    '<span class="head10">ส่วนลด: ' +
    discount_totalv +
    "</span><br>" +
    '<span class="head10 font-weight-bold">ยอดชำระรวม: ' +
    price_totalv +
    "</span><br></br>";
}