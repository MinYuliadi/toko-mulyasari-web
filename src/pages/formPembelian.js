import InputTextComponent from '../components/inputTextComponent';
import {DataContext} from '../handlers/stateManagement';
import {useContext} from 'react';
import FunctionHandler from '../handlers/functionHandler';

const FormPembelian = () => {
  const {inputForm} = useContext(DataContext);
  const {handleSubmitForm} = FunctionHandler();
  const varClassInput =
    'border focus:outline-none px-2 flex justify-center items-center rounded-sm';

  return (
    <>
      <div className="flex flex-col w-full px-[10rem] justify-center items-center text-gray-600 font-ubuntu text-base">
        <form
          method="post"
          onSubmit={handleSubmitForm}
          className="flex w-1/2 p-10 rounded-md shadow-lg shadow-zinc-400 flex-col gap-3">
          <InputTextComponent
            classLabel=""
            type="text"
            labelName="Nama"
            classInput={varClassInput}
            valInput={inputForm.name}
            param="name"
          />
          <InputTextComponent
            classLabel=""
            type="number"
            labelName="Nomor Whatsapp"
            classInput={varClassInput}
            valInput={inputForm.phoneNumber}
            param="phoneNumber"
          />
          <InputTextComponent
            classLabel=""
            type="text"
            labelName="Alamat"
            classInput={varClassInput}
            valInput={inputForm.address}
            param="address"
          />
          <button className="w-full bg-indigo-600 text-white rounded-md h-10">Simpan</button>
        </form>
      </div>
    </>
  );
};

export default FormPembelian;
