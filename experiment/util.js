function create_tv_array(json_object) {
    let tv_array = [];
    for (let i = 0; i < json_object.length; i++) {
        obj = {};
        obj.audio = json_object[i].audio;
        obj.id = json_object[i].id;
        obj.data = {};
        tv_array.push(obj)
    }
    return tv_array;
}