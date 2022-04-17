import InputTextComponent from '../components/inputTextComponent';
import {DataContext} from '../handlers/stateManagement';
import {useContext} from 'react';
import FunctionHandler from '../handlers/functionHandler';

const FormPembelian = () => {
  const {inputForm} = useContext(DataContext);
  const {handleSubmitForm, handleChange} = FunctionHandler();
  const varClassInput =
    'border focus:outline-none px-2 flex justify-center items-center rounded-sm';

  return (
    <>
      <div className="flex flex-col p-3 pb-36 w-full md:px-[10rem] justify-center items-center text-gray-600 font-ubuntu text-base">
        <form
          method="post"
          onSubmit={handleSubmitForm}
          className="flex w-[17rem] sm:w-[30rem] p-10 rounded-md shadow-lg shadow-zinc-400 flex-col gap-3">
          <InputTextComponent
            classLabel=""
            type="text"
            labelName="Nama"
            classInput={varClassInput}
            valInput={inputForm.name}
            param={(e) => handleChange('name', e)}
          />
          <InputTextComponent
            classLabel=""
            type="number"
            labelName="Nomor Whatsapp"
            classInput={varClassInput}
            valInput={inputForm.phoneNumber}
            param={(e) => handleChange('phoneNumber', e)}
          />
          <InputTextComponent
            classLabel=""
            type="text"
            labelName="Alamat"
            classInput={varClassInput}
            valInput={inputForm.address}
            param={(e) => handleChange('address', e)}
          />
          <button className="w-full bg-indigo-600 text-white rounded-md h-10">Simpan</button>
        </form>
      </div>
    </>
  );
};

export default FormPembelian;
