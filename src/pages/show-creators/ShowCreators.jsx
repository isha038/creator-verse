  // import Card from '../../components/card/Card.jsx'
  
  // export default function ShowCreators(props) {
  //   return (
      
  //     <div>
  //       <div className="bg-gradient-to-b from-slate-900 to-gray-900">
  //         <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
  //           <div id="best" className='flex justify-center items-center'>
                      
  //             <h2 className="text-gray-100 my-9 font-bold text-4xl">Best Creators</h2>
  //           </div>

  //           <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  //             {props.creators.map((creator)=> (
  //                 <Card key={creator.id} creator={creator}/>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  import React, { useState, useEffect } from 'react';
import Card from '../../components/card/Card.jsx';
import { supabase } from '../../client.js';

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase.from('creators').select('*');
        if (error) {
          throw new Error('Error fetching creators');
        }
        setCreators(data || []);
      } catch (error) {
        console.error('Error fetching creators:', error.message);
      }
    };

    fetchCreators();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div id="best" className='flex justify-center items-center'>
          <h2 className="text-gray-100 my-9 font-bold text-4xl">Best Creators</h2>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {creators.map(creator => (
            <Card key={creator.id} creator={creator} />
          ))}
        </div>
      </div>
    </div>
  );
}
