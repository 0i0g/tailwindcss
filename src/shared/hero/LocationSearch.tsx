import { Transition } from '@headlessui/react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { Fragment, useEffect, useRef, useState } from 'react';

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  placeholder?: string;
  desc?: string;
  focus?: boolean;
  className?: string;
};

const LocationSearch = ({
  value,
  onChange,
  onComplete,
  placeholder = 'Location',
  desc = 'Where are you going?',
  focus = false,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setfocused] = useState(focus);

  useEffect(() => {
    console.log(focused);
    console.log(inputRef.current);

    if (focused) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  }, [focused]);

  useEffect(() => {
    document.addEventListener('click', eventClickOutside);
    return () => {
      document.removeEventListener('click', eventClickOutside);
    };
  }, []);

  const eventClickOutside = (event: MouseEvent) => {
    console.log(containerRef.current);

    console.log(event.target as Node);

    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setfocused(false);
      console.log('click outside');
    }
  };

  const renderResultRow = (data: string) => (
    <div className='flex items-center'>
      <MapPinIcon className='h-8 w-8 text-neutral-400' />
      <span className='ml-2'>{data}</span>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center rounded-full bg-white px-10 py-5 ${
        focused ? 'nc-hero-field-focused' : ''
      } ${className}`}
      onClick={() => setfocused(true)}
    >
      <MapPinIcon className='h-8 w-8 text-neutral-400' />
      <div className='ml-2 flex-grow'>
        <input
          type='text'
          ref={inputRef}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          value={value}
          className='block truncate rounded-none border-none p-0 text-lg font-semibold placeholder-neutral-800 focus:placeholder-neutral-400 focus:ring-0'
        />
        <span className='block text-sm font-light text-neutral-400 line-clamp-1'>{desc}</span>
      </div>
      <Transition
        show={focused}
        as={Fragment}
        enter='transition ease-out duration-150 '
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <div className='absolute top-full left-0 mt-2 w-full rounded-3xl bg-white p-10 shadow-lg'>
          {renderResultRow('test')}
        </div>
      </Transition>
    </div>
  );
};

export default LocationSearch;
