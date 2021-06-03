import $ from 'jquery';
import select2 from 'select2';

const initSelect = () => {
  $(document).ready(function() {
    $('#plant_tag_tag_id').select2();
  })
}


export { initSelect }
