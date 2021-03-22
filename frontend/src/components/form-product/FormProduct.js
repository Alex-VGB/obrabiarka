import React, {useMemo} from 'react'
import './FormProduct.css'
import navIcons from '../utils/navIcons'

export default function FormProduct({state, handleSubmitProduct, editing}) {
    const preview = useMemo(
        () => {
            return typeof state.img === 'object' ? URL.createObjectURL(state.img) : state.img
        }, [state.img]
    )


    return (
        <section id="form" className="py-5 px-3">
            <div className="container-fluid">
                <p className="header-profile">Co reklamujesz?</p>
                <div className="row">
                    <div className="col card p-3">
                        <form className="my-4">
                            <div className='form-edit-main'>
                                <div className='form-edit-content'>
                                    <div className='values-edit'>
                                        <label className='label-text-product'>Tytuł*</label>
                                        <input
                                            type="text"
                                            className="input-height form-control"
                                            value={state.title}
                                            onChange={event => state.setTitle(event.target.value)}
                                        />
                                    </div>
                                    <div className='values-edit'>
                                        <label className='label-text-product'>Opis*</label>
                                        <textarea name="description" id="" cols="30" rows="10"
                                                  className="form-control"
                                                  value={state.description}
                                                  onChange={event => state.setDescription(event.target.value)}
                                        >
                                </textarea>
                                    </div>
                                </div>
                                <div className='form-edit-image'>
                                    <div className='values-edit'>
                                        <label className='label-text-product'>Zdjęcie</label>
                                        <label id="img"
                                               className={state.img ? 'has-img' : ''}
                                        >
                                            <img
                                                src={typeof state.img === 'object' ? `${preview}` : `https://limitless-reaches-05484.herokuapp.com/files/${state.img}`}
                                                alt="preview"
                                                className="preview img-product"
                                            />
                                            <input
                                                type="file"
                                                onChange={event => state.setImg(event.target.files[0])}
                                            />
                                            <div className="cam">
                                                <i className="fas fa-camera fa-2x"/><br/>
                                                <strong>Dodaj zdjęcie</strong><br/>
                                                <small>JPG, GIF, i PNG tylko</small>
                                            </div>
                                        </label>
                                    </div>
                                    <div className='values-edit'>
                                        <label className='label-text-product'>Cena (zł)</label>
                                        <input
                                            type="number"
                                            placeholder="Cena (zł)"
                                            className="input-height form-control"
                                            value={state.price || 0}
                                            onChange={event => state.setPrice(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='values-edit'>
                                <label className='label-text-product'>Kategoria*</label>
                                <ul className="categories categories-edit mt-4">
                                    {
                                        navIcons.map((icon, index) => (
                                            <li key={index}
                                                className={`card col-md-4 p-3 ${state.category === icon.text && 'selected'}`}
                                                onClick={() => state.setCategory(icon.text)}
                                            >
                                                <div className='icon-category'>
                                                    <div className={icon.class}/>
                                                    {icon.text}
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row my-4 text-center">
                    <div className="col my-3">
                        <span className="text-muted">Publikując, zgadzasz się i akceptujesz nasze <strong
                            >Warunki korzystania</strong> i <strong>Politykę prywatności</strong></span>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-orange mx-3 btn-right col-md-3"
                        onClick={handleSubmitProduct}
                    >
                        Prześlij ogłoszenie
                    </button>
                </div>
            </div>
        </section>
    )
}
